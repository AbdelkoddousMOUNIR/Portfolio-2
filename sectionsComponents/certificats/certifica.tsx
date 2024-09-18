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
      <div className="lg:w-[90%] flex bg-[#F7F7F7] dark:bg-color4 flex-col md:flex-row md:w-[580px] w-[350px] py-[30px]">
        <a href={certificatLink} className="md:w-[50%] w-full">
          <Image
          src={certificat}
          alt="certificat"
          className="w-full h-[300px]"
        />
        </a>
        <div className="lg:w-[50%] px-[20px] md:w-[300px] w-full hidden md:block">
          <h2 className="text-xl text-color1 dark:text-white capitalize font-semibold">
            {certificatHeading}
          </h2>
          <p className="mt-[7px] md:text-[0.9rem] opacity-70 mb-[30px]">
            {description}
          </p>
          <a
            href={`${certificatLink}`}
            className="bg-color2 capitalize dark:bg-white py-[10px] px-[50px] text-white dark:text-color4 rounded-md cursor-pointer"
          >
            see certificate
          </a>
        </div>
      </div>
    </div>
  );
}
