import React from "react";
import publicSpeaking from "../../assets/Home/public-speaking.png";
import careerOrientend from "../../assets/Home/career-oriented.png";
import creativeThinking from "../../assets/Home/creative-thinking.svg";
import frontPage from "../../assets/Home/frontpage.png";
import roundRing from "../../assets/Home/round-ring.png";
import smallDot from "../../assets/Home/small-dot.svg";
import bigDot from "../../assets/Home/big-dot.svg";
import placeholder from "../../assets/Home/placeholder.svg";
import duoligo from "../../assets/Home/duolingo.png";
import codeCov from "../../assets/Home/CodeCov.png";
import userTesting from "../../assets/Home/UserTesting.png";
import magicLeap from "../../assets/Home/Magic-Leap.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="ms:items-center mt-[45px] flex flex-col gap-9 p-3 sm:mt-[60px] sm:flex-row md:justify-between lg:px-5 2xl:container 2xl:mx-auto">
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
          <button className="mt-[22px] h-[40px] w-[110px] lg:w-[130px] lg:h-[50px] lg:text-lg cursor-pointer rounded-lg bg-[#20B486] font-semibold text-white">
            Get Started
          </button>
          {/* Outcome After UpSkill */}
          <ol className="ms:flex-nowrap ms:justify-normal mm:justify-center mt-[45px] flex flex-wrap justify-center gap-9 sm:justify-start">
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={publicSpeaking} alt="" />
              <p>Public Speaking</p>
            </li>
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={careerOrientend} alt="" />
              <p>career oriented</p>
            </li>
            <li className="flex flex-col items-center gap-2.5 text-center text-[14px] font-normal text-[#646464] capitalize">
              <img src={creativeThinking} alt="" />
              <p>creative thinking</p>
            </li>
          </ol>
          <div className="absolute -top-[110px] -left-[140px] -z-10">
            <img src={roundRing} className="" />
            <img src={smallDot} className="absolute top-[130px] left-[60px]" />
          </div>
        </div>
        {/* Right Side Image Content */}
        <div className="right relative order-1 sm:order-2">
          <div className="ms:min-w-[300px] max-w-[255px] min-w-[160px] overflow-hidden rounded-full bg-[#20B486] p-[0.1px] lg:h-[400px] lg:min-w-[400px]">
            <img
              src={frontPage}
              className="ms:mt-[65px] mx-auto my-0 mt-[28px] h-[240px] lg:h-[340px]"
            />
          </div>
          <img
            src={placeholder}
            className="absolute -top-[12px] -left-[20px] -z-10"
          />
          <img
            src={bigDot}
            className="absolute -bottom-[25px] left-[25px] w-[30px]"
          />
        </div>
      </div>
      {/* Brand Collaboration */}
      <div className="brand my-16 flex w-full overflow-hidden 2xl:container 2xl:mx-auto">
        <div className="logo-container animate-slider shrink-0 whitespace-nowrap">
          <img className="mx-10 inline-block" src={duoligo} alt="" />
          <img className="mx-10 inline-block" src={codeCov} alt="" />
          <img className="mx-10 inline-block" src={userTesting} alt="" />
          <img className="mx-10 inline-block" src={duoligo} alt="" />
          <img className="mx-10 inline-block" src={magicLeap} alt="" />
        </div>
        <div className="logo-container group-hover:animation-paused animate-slider shrink-0 whitespace-nowrap">
          <img className="mx-10 inline-block" src={duoligo} alt="" />
          <img className="mx-10 inline-block" src={codeCov} alt="" />
          <img className="mx-10 inline-block" src={userTesting} alt="" />
          <img className="mx-10 inline-block" src={duoligo} alt="" />
          <img className="mx-10 inline-block" src={magicLeap} alt="" />
        </div>
      </div>
    </>
  );
}
