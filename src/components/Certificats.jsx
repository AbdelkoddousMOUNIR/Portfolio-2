import React from "react";
import "../index.css";
import Certifica from "../sectionsComponents/Certificats/Certifica";
import { certificats } from "../sectionsComponents/Certificats/certificats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certificats() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="w-full px-[150px] my-[70px] st:px-[80px] sm:px-[5%] scroll-mt-[12vh] flex flex-col gap-[40px] sm:overflow-hidden"
      id="Certificats"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
          <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
            Certificats
          </h1>
        </div>
        <a
          href="certificats"
          className="text-color2 font-semibold transition-all hover:border-b-[3px] border-color2 rounded-[3px]"
        >
          see all
        </a>
      </div>
      <Slider {...settings}>
        {certificats.map((elem, index) => (
          <Certifica
            key={index}
            certificat={elem.certificat}
            certificatHeading={elem.certificatHeading}
            description={elem.description}
            certificatLink={elem.certificatUrl}
          />
        ))}
      </Slider>
    </div>
  );
}
