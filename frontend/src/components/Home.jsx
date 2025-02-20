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
      <div className="container mx-auto flex items-center justify-between mt-[85px]">
        <div className="left w-[570px] relative">
          <h1 className="text-[64px] capitalize font-bold leading-[82px] z-10">
            up your <span className="text-[#20B486]">skills</span> to{" "}
            <span className="text-[#20B486]">advance</span> your{" "}
            <span className="text-[#20B486]">career</span> path
          </h1>
          <p className="text-[#646464] mt-[22px] text-">
            Unlock your potential with KnowledgeNest—upskilling made simple,
            learning made limitless
          </p>
          <button className="w-[157px] h-[60px] bg-[#20B486] text-white rounded-lg text-lg font-semibold mt-[22px] cursor-pointer">
            Get Started
          </button>
          <ol className="flex gap-9 mt-[45px]">
            <li className="font-normal text-[#646464] capitalize inline-flex gap-2.5 items-center">
              <img src={publicSpeaking} alt="" />
              Public Speaking
            </li>
            <li className="font-normal text-[#646464] capitalize inline-flex gap-2.5 items-center">
              <img src={careerOrientend} alt="" />
              career-oriented
            </li>
            <li className="font-normal text-[#646464] capitalize inline-flex gap-2.5 items-center">
              <img src={creativeThinking} alt="" />
              creative thinking
            </li>
          </ol>
          {/* absolute -top-[115] -left-95 -z-10 */}
          <div className="absolute -top-[110px] -left-[140px] -z-10">
            <img src={roundRing} className="" />
            <img src={smallDot} className="absolute top-[130px] left-[60px]" />
          </div>
        </div>
        <div className="right relative">
          <div className="w-[495px] h-[495px] bg-[#20B486] p-[0.1px] rounded-full overflow-hidden">
            <img src={frontPage} className="mt-[68px] mx-auto my-0" />
          </div>
          <img
            src={placeholder}
            className="absolute -top-[25px] -left-[25px] -z-10"
          />
          <img src={bigDot} className="absolute left-[25px] bottom-[25px]" />
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between mt-[50px]">
        <p className="text-3xl capitalize"><span className=" font-bold text-[#20B486]">250+</span> <br /> <span className="text-2xl text-[#101828]">collaboration</span></p>
        <img src={duoligo} alt="" />
        <img src={codeCov} alt="" />
        <img src={userTesting} alt="" />
        <img src={magicLeap} alt="" />
        {/* <p>CodeCov</p>
        <p>UserTesting</p>
        <p>magic leap</p> */}
      </div>
    </>
  );
}

{
  /* <div>
            <p>250+ collaboration</p>
            <p>Duoligo</p>
            <p>CodeCov</p>
            <p>UserTesting</p>
            <p>magic leap</p>
          </div> */
}
