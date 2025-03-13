import React from "react";
import CommonCard from "../CommonCard";

export default function StudentDashboard() {
  const stats = [
    { number: "25K+", text: "Active Student" },
    { number: "899", text: "Total Courses" },
    { number: "158", text: "Instructor" },
    { number: "100%", text: "Satisfaction rate" },
  ];

  return (
    <>
      <div className="mt-[90px] flex flex-wrap justify-center gap-8 py-9 lg:flex-nowrap">
        {stats.map(({ number, text }, index) => (
          <CommonCard
            key={index}
            title={number}
            subtitle={text}
            customCss="h-[181px] w-[300px] rounded-3xl bg-[#f5f5f5] flex flex-col items-center justify-center gap-4 "
            customTitleCss={`text-brilliant-orange text-[32px] font-semibold`}
            customSubtitleCss={`text-space-cadet text-[18px] font-medium`}
          />
        ))}
      </div>
    </>
  );
}
