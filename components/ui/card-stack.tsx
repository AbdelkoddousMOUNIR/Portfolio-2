"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { certificat } from "@/types/types";
import Certifica from "@/sectionsComponents/certificats/certifica";

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: certificat[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<certificat[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: certificat[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full mt-[50px] flex justify-center items-center">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className="absolute w-full md:w-[700px] dark:bg-color4 bg-[#F7F7F7] rounded-md md:rounded-2xl p-4 shadow-lg border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Certifica
              key={index}
              certificat={card.certificat}
              certificatHeading={card.certificatHeading}
              description={card.description}
              certificatLink={card.certificatLink}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
