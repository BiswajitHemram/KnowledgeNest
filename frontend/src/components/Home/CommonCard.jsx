import React from "react";

export default function CommonCard({
  image,
  title,
  subtitle,
  description,
  socialMedia,
  customCss,
  border,
  shadow,
  customTitleCss,
  customSubtitleCss,
  customDescriptionCss,
  type = "default", // Default type is "default"
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-4 rounded-2xl p-6 ${
        border ? "border border-[#e1d9d9]" : ""
      } ${shadow ? "hover:shadow-lg" : ""} ${customCss}`}
    >
      {/* Image */}
      {image && <img src={image} alt="" className="mx-auto" />}

      {/* Content */}
      <div className={type === "teacher" ? "mt-[20px] text-center text-[16px]" : "text-center"}>
        {/* Title */}
        {title && <p className={`${customTitleCss}`}>{title}</p>}

        {/* Subtitle */}
        {subtitle && <p className={`${customSubtitleCss}`}>{subtitle}</p>}

        {/* Description */}
        {description && (
          <p className={`${customDescriptionCss} text-[14px]`}>{description}</p>
        )}
      </div>

      {/* Social Media */}
      {socialMedia && (
        <div
          className={`mt-4 flex items-center justify-center gap-4 ${
            type === "teacher" ? customCss : ""
          }`}
        >
          {socialMedia.map((item, idx) => (
            <img key={idx} src={item} alt="" />
          ))}
        </div>
      )}
    </div>
  );
}