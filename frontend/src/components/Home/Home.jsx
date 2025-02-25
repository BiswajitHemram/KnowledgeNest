import React from "react";
import publicSpeaking from "../../assets/Home/Hero_Section/public-speaking.png";
import careerOrientend from "../../assets/Home/Hero_Section/career-oriented.png";
import creativeThinking from "../../assets/Home/Hero_Section/creative-thinking.svg";
import frontPage from "../../assets/Home/Hero_Section/frontpage.png";
import roundRing from "../../assets/Home/Hero_Section/round-ring.png";
import smallDot from "../../assets/Home/Hero_Section/small-dot.svg";
import bigDot from "../../assets/Home/Hero_Section/big-dot.svg";
import placeholder from "../../assets/Home/Hero_Section/placeholder.svg";
import duoligo from "../../assets/Home/Brand_Collabratoin/duolingo.png";
import codeCov from "../../assets/Home/Brand_Collabratoin/CodeCov.png";
import userTesting from "../../assets/Home/Brand_Collabratoin/UserTesting.png";
import magicLeap from "../../assets/Home/Brand_Collabratoin/Magic-Leap.png";
import artsDesignIcon from "../../assets/Home/Categories/arts_design.png";
import developmentIcon from "../../assets/Home/Categories/development.png";
import communicationIcon from "../../assets/Home/Categories/communication.png";
import videographyIcon from "../../assets/Home/Categories/videography.png";
import photographyIcon from "../../assets/Home/Categories/photography.png";
import marketingIcon from "../../assets/Home/Categories/marketing.png";
import contentWritingIcon from "../../assets/Home/Categories/content_writing.png";
import financeIcon from "../../assets/Home/Categories/finance.png";
import scienceIcon from "../../assets/Home/Categories/science.png";
import "./Home.css";
import CategoryCard from "./CategoryCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
        {/* Light Green Radius Spread */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-[0%] left-[0%] h-56 w-56 rounded-full bg-green-400 opacity-20 blur-3xl"></div>
          <div className="absolute right-[20%] bottom-[0%] h-40 w-40 rounded-full bg-green-300 opacity-30 blur-2xl"></div>
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

      {/* Top Categories */}
      <div className="ml:flex-row ml:gap-0 ml:justify-between flex flex-col gap-8 px-3 lg:px-10 2xl:container 2xl:mx-auto">
        <div className="left">
          <h4 className="text-[20px] font-bold">Top Categories</h4>
          <p className="text-[14px] text-[#646464]">
            Explore our Popular Categories
          </p>
        </div>
        <button
          type="button"
          className="cursor-pointer self-center rounded-3xl border border-black px-[25px] py-[5px]"
        >
          All Categories
        </button>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,234px)] justify-center gap-8 px-3 py-9 2xl:container 2xl:mx-auto">
        <CategoryCard icon={artsDesignIcon} categoryName="Art & Design" totalCourse="8 Courses"/>
        <CategoryCard icon={developmentIcon} categoryName="Development" totalCourse="38 Courses"/>
        <CategoryCard icon={communicationIcon} categoryName="Communication" totalCourse="3 Courses"/>
        <CategoryCard icon={videographyIcon} categoryName="Videography" totalCourse="4 Courses"/>
        <CategoryCard icon={photographyIcon} categoryName="Photography" totalCourse="1 Courses"/>
        <CategoryCard icon={marketingIcon} categoryName="Marketing" totalCourse="8 Courses"/>
        <CategoryCard icon={contentWritingIcon} categoryName="Content Writing" totalCourse="38 Courses"/>
        <CategoryCard icon={financeIcon} categoryName="Finance" totalCourse="3 Courses"/>
        <CategoryCard icon={scienceIcon} categoryName="Science" totalCourse="4 Courses"/>
        <CategoryCard icon={photographyIcon} categoryName="Network" totalCourse="1 Courses"/>
      </div>
    </>
  );
}
