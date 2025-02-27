import React from "react";

export default function ({teacherAvatar, teacherName, designation, bio, soicalMedia, customcss}) {
  return (
    <div className="p-6 bg-[#b9cfe6] rounded-[8px] relative">
      <img src={teacherAvatar} alt="" className="mx-auto" />
      <div className="mt-[20px] text-center text-[16px]">
        <p className="text-[#101828] font-medium text-[18px]">{teacherName}</p>
        <p className="text-[#22B286] mb-2">{designation}</p>
        <p className="text-[#667085] w-[95%] mx-auto">
          {bio}
        </p>
        <div className={`mt-4 flex items-center justify-center gap-4 ${customcss}`}>
          {
            soicalMedia.map((item, idx) => <img key={idx} src={item} alt="" />)
          }
        </div>
      </div>
    </div>
  );
}
