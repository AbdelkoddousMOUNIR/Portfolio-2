"use client";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImgContainer from "@/sectionsComponents/home/imgContainer";
import MyInfos from "@/sectionsComponents/home/myInfos";
import { appContext } from "@/context/appContext";

export default function Home() {
  const appCtx = useContext(appContext);

  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }

  const { modifySelectedItem } = appCtx;
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("Home");
    }
  }, [inView, modifySelectedItem]);

  return (
    <section
      className="h-auto w-full px-[150px] mt-[70px] st:px-[80px] sm:mt-[50px] sm:px-[10%] scroll-m-[23vh]"
      id="Home"
      ref={ref}
    >
      <div className="flex sm:flex-col sm:gap-[50px]">
        <MyInfos />
        <ImgContainer />
      </div>
    </section>
  );
}
