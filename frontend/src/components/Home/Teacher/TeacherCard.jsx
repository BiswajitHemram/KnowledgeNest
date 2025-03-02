import React from "react";

export default function ({
  teacherAvatar,
  teacherName,
  designation,
  bio,
  soicalMedia,
  customcss,
}) {
  return (
    <div className="relative rounded-[8px] bg-[#b9cfe6] p-6">
      <img src={teacherAvatar} alt="" className="mx-auto" />
      <div className="mt-[20px] text-center text-[16px]">
        <p className="text-space-cadet text-[18px] font-medium">
          {teacherName}
        </p>
        <p className="text-medium-sea-green mb-2">{designation}</p>
        <p className="text-medium-gray mx-auto w-[95%]">{bio}</p>
        <div
          className={`mt-4 flex items-center justify-center gap-4 ${customcss}`}
        >
          {soicalMedia.map((item, idx) => (
            <img key={idx} src={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
