import { skill } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdMoreHoriz } from "react-icons/md";

interface skillCardProps extends skill {
  position: string;
}

export default function SkillCard({
  skillImage,
  title,
  description,
  technologiesImages,
  colors,
  position,
}: skillCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Adjusting the animation based on screen size
  const motionDistance = typeof window !== "undefined" && window.innerWidth <= 768 ? 150 : 300;

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[400px] md:max-w-[500px] dark:bg-color3 flex gap-[15px] rounded-md shadow-lg p-5"
      initial={{
        // Right cards come from the right, left cards come from the left
        x: position === "right" ? motionDistance : -motionDistance,
        opacity: 0,
      }}
      animate={{
        x: inView ? 0 : position === "right" ? motionDistance : -motionDistance,
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={skillImage}
        alt="skill image"
        height={80}
        width={80}
        className="w-[50px] h-[50px] rounded-md"
      />
      <div className="grid gap-[5px]">
        <h1
          style={{
            background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-xl md:text-2xl font-semibold mt-[5px] capitalize"
        >
          {title}
        </h1>
        <p className="text-[12px] md:text-sm text-opacity-50">{description}</p>
        <div className="flex gap-[5px] mt-[10px]">
          {technologiesImages.map((technology, index) => (
            <Image
              key={index}
              src={technology}
              alt="technology image"
              height={35}
              width={35}
              className="w-[20px] h-[20px] md:w-[35px] md:h-[35px]"
            />
          ))}
          <div className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] bg-black dark:bg-color4 bg-opacity-90 flex justify-center items-center rounded-md">
            <MdMoreHoriz className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}