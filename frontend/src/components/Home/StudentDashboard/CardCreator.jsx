import React from "react";

export default function CardCreator({ number, text }) {
  return (
    <div className="flex h-[181px] w-[300px] flex-col items-center justify-center gap-4 rounded-3xl bg-[#f5f5f5]">
      <h4 className="text-brilliant-orange text-[32px] font-semibold">
        {number}
      </h4>
      <p className="text-space-cadet text-[18px] font-medium">{text}</p>
    </div>
  );
}
