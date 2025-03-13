import React from "react";
import CommonCard from "../CommonCard";

export default function CardCreator({ number, text }) {
  return (
    <CommonCard
      title={number}
      subtitle={text}
      customCss="h-[181px] w-[300px] rounded-3xl bg-[#f5f5f5]"
      customTitleCss={`text-brilliant-orange text-[32px] font-semibold`}
      customsubtitleCss={`text-space-cadet text-[18px] font-medium`}
    />
  );
}