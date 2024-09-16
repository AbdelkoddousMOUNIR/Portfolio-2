import "@/app/globals.css"
import { certificat } from "@/types/types";
import Image from "next/image";

export default function Certifica({
  certificat,
  certificatHeading,
  description,
  certificatLink,
} : certificat) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70%] flex bg-[#F7F7F7] shadow-md sm:flex-col st:w-[580px] sm:w-[350px]">
        <Image
          src={certificat}
          alt="certificat"
          className="w-[50%] st:w-[270px] sm:w-full"
        />
        <div className="w-[50%] p-[20px] relative st:w-[300px] sm:w-full">
          <h2 className="text-xl text-color1 capitalize font-medium sm:mb-[70px]">
            {certificatHeading}
          </h2>
          <p className="h-[150px] mt-[7px] text-[1rem] opacity-70 mb-[70px] overflow-hidden st:text-sm sm:hidden st:h-[170px]">
            {description}
          </p>
          <a
            href={`${certificatLink}`}
            className="bg-color2 py-[6px] px-[16px] text-white absolute bottom-[20px] right-[20px] rounded-md cursor-pointer"
          >
            see certificat
          </a>
        </div>
      </div>
    </div>
  );
}
