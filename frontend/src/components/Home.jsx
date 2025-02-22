import React from "react";
import publicSpeaking from "../assets/Home/public-speaking.png";
import careerOrientend from "../assets/Home/career-oriented.png";
import creativeThinking from "../assets/Home/creative-thinking.svg";
import frontPage from "../assets/Home/frontpage.png";
import roundRing from "../assets/Home/round-ring.png";
import smallDot from "../assets/Home/small-dot.svg";
import bigDot from "../assets/Home/big-dot.svg";
import placeholder from "../assets/Home/placeholder.svg";
import duoligo from "../assets/Home/duolingo.png";
import codeCov from "../assets/Home/CodeCov.png";
import userTesting from "../assets/Home/UserTesting.png";
import magicLeap from "../assets/Home/Magic-Leap.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col  gap-9 mm:justify-between mt-[45px] p-3">
        <div className="left mm:w-[570px] relative order-2">
          <h1 className="text-2xl  mm:text-[64px] capitalize font-bold mm:leading-[82px] z-10">
            up your <span className="text-[#20B486]">skills</span> to{" "}
            <span className="text-[#20B486]">advance</span> your{" "}
            <span className="text-[#20B486]">career</span> path
          </h1>
          <p className="text-[#646464] mt-[22px] text-[14px]">
            Unlock your potential with KnowledgeNest — upskilling made simple,
            learning made limitless
          </p>
          <button className="w-[110px] h-[40px] bg-[#20B486] text-white rounded-lg  font-semibold mt-[22px] cursor-pointer">
            Get Started
          </button>
          <ol className="flex gap-9 mt-[45px]">
            <li className="font-normal text-[14px] text-[#646464] capitalize flex flex-col gap-2.5 items-center text-center">
              <img src={publicSpeaking} alt="" />
              <p>Public Speaking</p>
            </li>
            <li className="font-normal text-[14px] text-[#646464] capitalize flex flex-col gap-2.5 items-center text-center">
              <img src={careerOrientend} alt="" />
              <p>career oriented</p>
            </li>
            <li className="font-normal text-[14px] text-[#646464] capitalize flex flex-col gap-2.5 items-center text-center">
              <img src={creativeThinking} alt="" />
              <p>creative thinking</p>
            </li>
          </ol>
          {/* absolute -top-[115] -left-95 -z-10 */}
          <div className="absolute -top-[110px] -left-[140px] -z-10">
            <img src={roundRing} className="" />
            <img src={smallDot} className="absolute top-[130px] left-[60px]" />
          </div>
        </div>
        <div className="right relative order-1">
          <div className="w-[285px] h-[285px] ms:w-[325px] ms:h-[325px] bg-[#20B486] p-[0.1px] rounded-full overflow-hidden">
            <img src={frontPage} className="mt-[28px] ms:mt-[65px] h-[260px] mx-auto my-0" />
          </div>
          <img
            src={placeholder}
            className="absolute -top-[12px] -left-[20px] -z-10"
          />
          <img
            src={bigDot}
            className="absolute left-[25px] -bottom-[25px] w-[30px]"
          />
        </div>
      </div>
      <div className="brand w-full overflow-hidden my-16 flex">
        <div className="logo-container whitespace-nowrap shrink-0  animate-slider">
          <img className="inline-block mx-10" src={duoligo} alt="" />
          <img className="inline-block mx-10" src={codeCov} alt="" />
          <img className="inline-block mx-10" src={userTesting} alt="" />
          <img className="inline-block mx-10" src={duoligo} alt="" />
          <img className="inline-block mx-10" src={magicLeap} alt="" />
        </div>
        <div className="logo-container whitespace-nowrap shrink-0  animate-slider">
          <img className="inline-block mx-10" src={duoligo} alt="" />
          <img className="inline-block mx-10" src={codeCov} alt="" />
          <img className="inline-block mx-10" src={userTesting} alt="" />
          <img className="inline-block mx-10" src={duoligo} alt="" />
          <img className="inline-block mx-10" src={magicLeap} alt="" />
        </div>
      </div>
    </>
  );
}
