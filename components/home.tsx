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
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("home");
    }
  }, [inView, modifySelectedItem]);

  return (
    <section
      className="h-auto w-full lg:px-[10%] lg:mt-[70px] md:px-[80px] mt-[50px] px-[10%] scroll-m-[23vh]"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row gap-[50px]">
        <MyInfos />
        <ImgContainer />
      </div>
    </section>
  );
}
