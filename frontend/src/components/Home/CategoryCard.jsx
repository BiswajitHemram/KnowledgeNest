import React from "react";

export default function CategoryCard({ icon, categoryName, totalCourse }) {
  return (
    <div className="category-card:relative category-card:top-0 flex h-[234px] w-[234px] cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl border border-[#e1d9d9] category-card:transition-[top] category-card:duration-300 category-card:ease-linear category-card:hover:-top-[10px] hover:shadow-lg">
      <img src={icon} alt="" />
      <p className="text-[18px] font-bold">{categoryName}</p>
      <p className="text-[12px] text-[#646464]">{totalCourse}</p>
    </div>
  );
}
