import React from "react";

export default function SectionHeader({
  miniHeading = "",
  heading,
  subtext = "",
  btnText = "",
  showMiniHeading = true,
  showSubtext = true,
  showButton = false,
}) {
  return (
    <div
      className={`${showButton ? "ml:flex-row flex flex-col items-center justify-between gap-8" : "ml:gap-0"} mt-[45px] mb-5 sm:mt-[60px] lg:mb-8`}
    >
      <div>
        {showMiniHeading && miniHeading && (
          <p className="text-xs font-semibold text-[#1A906B] sm:text-sm lg:text-base">
            {miniHeading}
          </p>
        )}
        <h4 className="mt-1 mb-2 text-2xl font-semibold text-[#101828] sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {heading}
        </h4>
        {showSubtext && subtext && (
          <p className="text-sm text-[#667085] sm:text-base lg:text-lg 2xl:text-xl">
            {subtext}
          </p>
        )}
      </div>
      {showButton && btnText && (
        <button
          type="button"
          className="text-space-cadet cursor-pointer rounded-3xl border border-black px-[25px] py-[5px] text-sm font-medium whitespace-nowrap sm:text-lg lg:px-[30px] lg:py-[8px] 2xl:text-xl"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}
