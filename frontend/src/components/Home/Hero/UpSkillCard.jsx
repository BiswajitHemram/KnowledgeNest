import React from "react";

export default function UpSkillCard({ image, text }) {
  return (
    <li className="text-medium-gray flex flex-col items-center gap-2.5 text-center text-[14px] font-normal capitalize sm:text-sm">
      <img src={image} alt="" />
      <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg">{text}</p>
    </li>
  );
}
