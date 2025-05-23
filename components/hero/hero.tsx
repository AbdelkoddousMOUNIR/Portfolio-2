"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { IconCloud } from "../magicui/icon-cloud";
import { slugs } from "@/data/data";

const getImageUrls = async (slugs: string[]) => {
  const images = await Promise.all(
    slugs.map(async (slug) => {
      const url = `https://cdn.simpleicons.org/${slug}`;
      const res = await fetch(url);
      if (res.ok) {
        return url;
      } else {
        return `/images/${slug}.png`;
      }
    })
  );

  return images;
};

const Hero = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = await getImageUrls(slugs);
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col md:flex-row items-center justify-center md:gap-10 px-5 md:px-20 pb-20 lg:pb-40 pt-20 z-[20]"
    >
      <div className="h-full w-full md:w-fit flex flex-col gap-4 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#3674B5] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#3674B5] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            The best project exprience
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A1E3F9] to-[#3674B5]">
              {" "}
              innovative and efficient{" "}
            </span>
            web solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 mb-5 max-w-[600px]"
        >
          I combines creativity and functionality using web development
          technologies to create seamless digital experiences. I focus on
          user-centered design, ensuring intuitive, visually appealing
          interfaces. The goal is to deliver fast, reliable, and scalable
          websites that evolve with user needs.
        </motion.p>
        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Show my work
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full md:w-fit flex mt-8 md:mt-0 justify-center items-center"
      >
        <motion.div className="scale-[1.2] md:scale-[1.5]">
          {images.length > 0 && <IconCloud images={images} />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
