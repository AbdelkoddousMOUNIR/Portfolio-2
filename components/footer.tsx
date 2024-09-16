"use client";
import Sections from "../sectionsComponents/footer/sections";
import Work from "../sectionsComponents/footer/work";
import Setings from "../sectionsComponents/footer/setings";
import Subscription from "../sectionsComponents/footer/subscription";
import { SocialIcon } from "react-social-icons";
import { appContext } from "../context/appContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const appCtx = useContext(appContext);
  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }
  let { modifySelectedItem } = appCtx;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("ContactUs");
    }
  });

  return (
    <footer
      className="h-auto bg-color1 px-[120px] py-[30px] flex flex-col scroll-m-[16vh] items-center sm:px-[30px] st:px-[30px]"
      id="ContactUs"
      ref={ref}
    >
      <div className="w-full flex justify-between sm:flex-col-reverse sm:gap-[30px]">
        <div className="flex justify-between w-[55%] sm:w-full">
          <Sections />
          <Work />
          <Setings />
        </div>
        <Subscription />
      </div>
      <hr className="w-[90%] h-[3px] mt-[30px] bg-white rounded-[4px]" />
      <div className="w-full flex justify-between items-center mt-[30px]">
        <h3 className="text-white font-medium sm:text-[0.8rem]">
          © copyrite 2024
        </h3>
        <div className="flex gap-[15px] sm:gap-[5px]">
          <SocialIcon
            url="https://www.linkedin.com/in/abdelkoddous-mounir-50373a294/"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://github.com/AbdelkoddousMOUNIR"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="mailto:abdelkoddousmounir@gmail.com"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://api.whatsapp.com/message/6KPU743BLRSWI1?autoload=1&app_absent=0"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </footer>
  );
}
