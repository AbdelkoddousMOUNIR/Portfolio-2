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
      modifySelectedItem("Certificats"); // Update selected item when in view
    }
  }, [inView, modifySelectedItem]); // Ensure the effect runs when `inView` or `modifySelectedItem` changes

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <section
      className="w-full px-[150px] my-[40px] st:px-[90px] sm:px-[5%] scroll-mt-[120px] flex flex-col gap-[40px]"
      id="Certificats"
      ref={ref} // Attach the ref to track intersection
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
        <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
          Certificats
        </h1>
      </div>
      <Slider {...settings} className="sm:overflow-hidden">
        {certificats.map((elem, index) => (
          <Certifica
            key={index}
            certificat={elem.certificat}
            certificatHeading={elem.certificatHeading}
            description={elem.description}
            certificatLink={elem.certificatLink}
          />
        ))}
      </Slider>
    </section>
  );
}
