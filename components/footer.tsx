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
      modifySelectedItem("contactUs");
    }
  });

  return (
    <footer
      className="h-auto bg-color1 dark:bg-color3 lg:px-[120px] py-5 flex flex-col scroll-m-[16vh] items-center px-[30px] md:px-[30px]"
      id="contactUs"
      ref={ref}
    >
      <div className="w-full flex justify-between items-center">
        <h3 className="text-white font-medium text-[0.8rem] md:text-lg">
          © copyrite 2024
        </h3>
        <div className="flex md:gap-[15px] gap-[5px]">
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
