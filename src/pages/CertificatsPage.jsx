import React from "react";
import { certificats } from "../sectionsComponents/Certificats/certificats";
import Certifica from "../sectionsComponents/Certificats/Certifica";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function CertificatsPage() {
    let navigate = useNavigate()
  return (
    <div>
      <div className="m-[20px] flex gap-[20px] items-center">
        <IoMdArrowRoundBack className="text-4xl text-color2 cursor-pointer" onClick={() => navigate('/')}/>
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
          <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
            Certificats
          </h1>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-[30px]">
        {certificats.map((elem, index) => (
          <Certifica
            key={index}
            certificat={elem.certificat}
            certificatHeading={elem.certificatHeading}
            description={elem.description}
            certificatLink={elem.certificatUrl}
          />
        ))}
      </div>
    </div>
  );
}
