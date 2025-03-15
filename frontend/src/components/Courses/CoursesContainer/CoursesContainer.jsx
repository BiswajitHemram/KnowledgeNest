import React from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  image1,
  image2,
  wrapIcon,
  rating as ratingIcon,
} from "../../../assets/Home";

export default function CoursesContainer() {
  const courses = [
    {
      id: crypto.randomUUID(),
      image: image1,
      category: "Design",
      title: "Figma UI UX Design",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: {
        rate: 4.3,
        count: 16843,
      },
      instructor: {
        avatar: avatar1,
        name: "Jane Cooper",
      },
      enrolled: 2001,
      price: 17.54,
    },
    {
      id: crypto.randomUUID(),
      image: image2,
      category: "Development",
      title: "Learn With Shoaib",
      description:
        "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rating: {
        rate: 4,
        count: 1683,
      },
      instructor: {
        avatar: avatar2,
        name: "Allen Cooper",
      },
      enrolled: 201,
      price: 27.54,
    },
    {
      id: crypto.randomUUID(),
      image: image1,
      category: "Design",
      title: "Building User Interface",
      description:
        "Learn how to apply User Experience (UX) principles to your website designs.",
      rating: {
        rate: 3,
        count: 6843,
      },
      instructor: {
        avatar: avatar3,
        name: "Smith Cooper",
      },
      enrolled: 40,
      price: 54,
    },
    {
      id: crypto.randomUUID(),
      image: image1,
      category: "Design",
      title: "Figma UI UX Design",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: {
        rate: 4.3,
        count: 16843,
      },
      instructor: {
        avatar: avatar1,
        name: "Jane Cooper",
      },
      enrolled: 2001,
      price: 17.54,
    },
  ];
  return (
    <>
      {/* <div
        className=" rounded-[8px] border border-[#e1d9d9] p-4 md:p-6 lg:px-3 lg:py-4 2xl:p-8"
      >
        <img
          src={item.image}
          alt="Course"
          className="w-full object-fill object-center h-[200px]"
        />
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold text-[#1A906B]">
            {courses[0].category}
          </h4>
          <div className="mt-3 flex items-center justify-between">
            <h3 className="truncate text-[18px] font-semibold text-[#101828]">
              {courses[0].title}
            </h3>
            <img src={wrapIcon} alt="icon" />
          </div>
          <p className="mt-3 text-[#667085]">{courses[0].description}</p>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="text-[#3FC89E]">{courses[0].rating.rate}</span>
            <img src={ratingIcon} alt="rating" />
            <span className="text-[#969696]">{courses[0].rating.count}</span>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={courses[0].instructor.avatar} alt="Instructor" />
              <div className="text-[12px]">
                <p className="text-[#101828]">{courses[0].instructor.name}</p>
                <p className="text-[#667085]">{courses[0].enrolled} Enrolled</p>
              </div>
            </div>
            <p className="text-[20px] font-bold text-[#3FC89E] lg:text-2xl">
              ${courses[0].price}
            </p>
          </div>
        </div>
      </div> */}
      {courses.map((item) => {
        return (
          <div
            key={item.id}
            className="rounded-[8px] border border-[#e1d9d9] p-2.5 md:p-6 lg:px-3 lg:py-4 2xl:p-8"
          >
            <img
              src={item.image}
              alt="Course"
              className="mm:h-[200px] h-[160px] w-full object-fill object-center"
            />
            <div className="mt-4">
              <h4 className="text-[12px] font-semibold text-[#1A906B]">
                {item.category}
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="truncate text-[18px] font-semibold text-[#101828]">
                  {item.title}
                </h3>
                <img src={wrapIcon} alt="icon" />
              </div>
              <p className="mt-3 text-[#667085]">{item.description}</p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">{item.rating.rate}</span>
                <img src={ratingIcon} alt="rating" />
                <span className="text-[#969696]">{item.rating.count}</span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.instructor.avatar} alt="Instructor" />
                  <div className="text-[12px]">
                    <p className="text-[#101828]">{item.instructor.name}</p>
                    <p className="text-[#667085]">{item.enrolled} Enrolled</p>
                  </div>
                </div>
                <p className="text-[20px] font-bold text-[#3FC89E] lg:text-2xl">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
