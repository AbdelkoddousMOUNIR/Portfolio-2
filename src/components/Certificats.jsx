import React, { useContext, useEffect } from "react"; // Importing useContext and useEffect from 'react'
import "../index.css"
import Certifica from "../sectionsComponents/Certificats/Certifica";
import { certificats } from "../sectionsComponents/Certificats/certificats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appContext } from '../context/AppContext';
import { useInView } from 'react-intersection-observer';

export default function Certificats() {
  const { modifySelectedItem } = useContext(appContext); // Adding missing curly braces around modifySelectedItem
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("Certificats");
    }
  }, [inView, modifySelectedItem]); // Adding missing dependencies to useEffect

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <section
      className="w-full px-[150px] my-[40px] st:px-[80px] sm:px-[5%] scroll-mt-[12vh] flex flex-col gap-[40px] sm:overflow-hidden"
      id="Certificats"
      ref={ref}
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
    </section>
  );
}