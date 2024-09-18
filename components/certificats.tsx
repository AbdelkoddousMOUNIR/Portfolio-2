"use client";
import { useContext, useEffect } from "react";
import "@/app/globals.css";
import Certifica from "../sectionsComponents/certificats/certifica";
import { certificats } from "../sectionsComponents/certificats/certificats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appContext } from "../context/appContext"; // Assuming appContext is correctly typed
import { useInView } from "react-intersection-observer";
import { CardStack } from "./ui/card-stack";

export default function Certificats() {
  const appCtx = useContext(appContext);

  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }

  const { modifySelectedItem } = appCtx; // Destructure modifySelectedItem from the context
  const { ref, inView } = useInView({
    threshold: 1, // Callback will only trigger when 100% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("certificats"); // Update selected item when in view
    }
  }, [inView, modifySelectedItem]); // Ensure the effect runs when `inView` or `modifySelectedItem` changes
  
  return (
    <section
      className="w-full h-[70vh] lg:px-[150px] my-[40px] md:px-[90px] px-[5%] scroll-mt-[120px] flex flex-col gap-[40px] mb-[150px]"
      id="certificats"
      ref={ref} // Attach the ref to track intersection
    >
      <div className="flex items-center gap-[10px]">
        <div className="md:w-[20px] md:h-[50px] bg-color1 dark:bg-white dark:bg-opacity-80 rounded-[20px] w-[10px] h-[25px]"></div>
        <h1 className="md:text-2xl text-color1 dark:text-white dark:text-opacity-80 font-semibold text-lg">
          Certificats
        </h1>
      </div>
      <div className="w-full">
        <CardStack items={certificats} />
      </div>
    </section>
  );
}