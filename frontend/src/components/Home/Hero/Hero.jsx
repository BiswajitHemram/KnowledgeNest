import {
  bigDotIcon,
  careerOrientendIcon,
  creativeThinkingIcon,
  fontpageIcon,
  placeholderIcon,
  publicSpeakingIcon,
  roundRingIcon,
  smallDotIcon,
} from "../../../assets/Home";
import UpSkillCard from "./UpSkillCard";

export default function Hero() {
  return (
    <>
      <div className="ms:items-center mt-[45px] flex flex-col gap-9 sm:mt-[60px] sm:flex-row md:justify-between">
        {/* Left Side Text Content */}
        <div className="left relative order-2 sm:order-1 md:w-[570px]">
          {/* Hero Section Heading */}
          <h1 className="text-heading text-space-cadet z-10 text-3xl font-bold capitalize sm:text-5xl sm:text-[42px] sm:leading-14 lg:text-[64px] lg:leading-[82px] 2xl:text-7xl">
            up your <span className="text-medium-sea-green">skills</span> to{" "}
            <span className="text-medium-sea-green">advance</span> your{" "}
            <span className="text-medium-sea-green">career</span> path
          </h1>
          {/* Quote About Website */}
          <p className="text-medium-gray mt-[22px] text-xs sm:w-[80%] sm:text-sm md:w-auto lg:text-base 2xl:text-lg">
            Unlock your potential with KnowledgeNest — upskilling made simple,
            learning made limitless
          </p>
          <button className="bg-medium-sea-green mt-[22px] h-[40px] w-[110px] cursor-pointer rounded-lg text-xs font-semibold text-white sm:text-sm lg:h-[50px] lg:w-[130px] lg:text-lg 2xl:h-[60px] 2xl:w-[150px] 2xl:text-xl">
            Get Started
          </button>
          {/* Outcome After UpSkill */}
          <ol className="ms:flex-nowrap ms:justify-normal mm:justify-center mt-[45px] flex flex-wrap justify-center gap-9 sm:justify-start">
            <UpSkillCard image={publicSpeakingIcon} text="Public Speaking" />
            <UpSkillCard image={careerOrientendIcon} text="career oriented" />
            <UpSkillCard
              image={creativeThinkingIcon}
              text="creative thinking"
            />
          </ol>

          <div className="absolute -top-[110px] -left-[140px] -z-10">
            <img src={roundRingIcon} className="" />
            <img
              src={smallDotIcon}
              className="absolute top-[130px] left-[60px]"
            />
          </div>
        </div>
        {/* Right Side Image Content */}
        <div className="right relative order-1 sm:order-2">
          <div className="ms:min-w-[300px] bg-medium-sea-green max-w-[255px] min-w-[160px] overflow-hidden rounded-full p-[0.1px] lg:h-[400px] lg:min-w-[400px]">
            <img
              src={fontpageIcon}
              className="ms:mt-[65px] mx-auto my-0 mt-[28px] h-[240px] lg:h-[340px]"
            />
          </div>
          <img
            src={placeholderIcon}
            className="absolute -top-[12px] -left-[20px] -z-10"
          />
          <img
            src={bigDotIcon}
            className="absolute -bottom-[25px] left-[25px] w-[30px]"
          />
        </div>
        {/* Light Green Radius Spread */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-[0%] left-[0%] h-56 w-56 rounded-full bg-green-400 opacity-20 blur-3xl"></div>
          <div className="absolute right-[20%] bottom-[0%] h-40 w-40 rounded-full bg-green-300 opacity-30 blur-2xl"></div>
        </div>
      </div>
    </>
  );
}
