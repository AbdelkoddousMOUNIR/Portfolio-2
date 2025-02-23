import { socialMedia } from "@/data/data";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-90 border-t-[1px] border-[#3674B5] py-7 px-6 flex mt-16 md:flex-row flex-col gap-5 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Abdelkoddous MOUNIR
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#3674B5] rounded-full border border-[#3674B5]"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
    </footer>
  );
};

export default Footer;