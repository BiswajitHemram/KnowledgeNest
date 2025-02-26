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

export default function Hero() {
  return (
    <>
      <div className="ms:items-center mt-[45px] flex flex-col gap-9 p-3 sm:mt-[60px] sm:flex-row md:justify-between lg:px-10 2xl:container 2xl:mx-auto">
        {/* Left Side Text Content */}
        <div className="left relative order-2 sm:order-1 md:w-[570px]">
          {/* Hero Section Heading */}
          <h1 className="z-10 text-2xl font-bold capitalize sm:text-[42px] lg:text-[64px] lg:leading-[82px]">
            up your <span className="text-[#20B486]">skills</span> to{" "}
            <span className="text-[#20B486]">advance</span> your{" "}
            <span className="text-[#20B486]">career</span> path
          </h1>
          {/* Quote About Website */}
          <p className="mt-[22px] text-[14px] text-[#646464] sm:w-[80%] md:w-auto">
            Unlock your potential with KnowledgeNest — upskilling made simple,
            learning made limitless
          </p>
          <button className="mt-[22px] h-[40px] w-[110px] cursor-pointer rounded-lg bg-[#20B486] font-semibold text-white lg:h-[50px] lg:w-[130px] lg:text-lg">
            Get Started
          </button>
          {/* Outcome After UpSkill */}
          <ol className="ms:flex-nowrap ms:justify-normal mm:justify-center mt-[45px] flex flex-wrap justify-center gap-9 sm:justify-start">
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={publicSpeakingIcon} alt="" />
              <p>Public Speaking</p>
            </li>
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={careerOrientendIcon} alt="" />
              <p>career oriented</p>
            </li>
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={creativeThinkingIcon} alt="" />
              <p>creative thinking</p>
            </li>
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
          <div className="ms:min-w-[300px] max-w-[255px] min-w-[160px] overflow-hidden rounded-full bg-[#20B486] p-[0.1px] lg:h-[400px] lg:min-w-[400px]">
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
