import React from "react";
import CommonCard from "../CommonCard";
export default function CategoryCard({ icon, categoryName, totalCourse }) {
  return (
    <CommonCard
      image={icon}
      title={categoryName}
      description={totalCourse}
      border={true}
      shadow={true}
      customCss="transform transition-transform duration-300 ease-in-out hover:-translate-y-2 h-[234px] w-[234px] cursor-pointer"
      customTitleCss="text-space-cadet text-[18px] font-bold"
      customsubtitleCss="text-medium-sea-green text-[16px]"
    />
  );
}
