import MagicButton from "../ui/magicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center" id="about">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-white text-center">
          Dynamic Web Magic Crafted with Code
        </p>

        <TextGenerateEffect
          words="Transforming visions into engaging user journeys"
          className="text-center text-[40px] lg:text-6xl"
        />

        <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m MOUNIR Abdelkoddous, a Full Stack Developer <br /> based
          in Morocco
        </p>

        <a
          href="/pdfs/resume.pdf"
          download={"Abdelkoddous MOUNIR resume"}
        >
          <MagicButton
            title="Get My Resume Here"
            position="right"
            className="md:mt-10"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
