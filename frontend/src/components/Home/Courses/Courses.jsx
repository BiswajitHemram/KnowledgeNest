import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./courses.css";
import { Pagination } from "swiper/modules";
import {
  avatar1,
  avatar2,
  avatar3,
  wrapIcon,
  image1,
  image2,
  image3,
  rating as ratingIcon,
} from "../../../assets/Home";
import  SectionHeader  from "../SectionHeader";

export default function Courses() {
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
      <SectionHeader
        miniHeading="Explore Program"
        heading="Our Most Popular Class"
        subtext="Let's join our famous class, the knowledge provided will definitely
            be useful for you."
      />
      <div className="swiper-container ml:w-[368px] mm:container mm:mx-auto relative cursor-grab pt-8 sm:w-[100%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={35}
          pagination={{
            el: ".courses-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {courses.map((course) => (
            <SwiperSlide
              key={course.id}
              className="rounded-[8px] border border-[#e1d9d9] p-4 md:p-6 lg:p-8"
            >
              <img
                src={course.image}
                alt="Course"
                className="w-full object-cover"
              />
              <div className="mt-8">
                <h4 className="text-[12px] font-semibold text-[#1A906B]">
                  {course.category}
                </h4>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="truncate text-[18px] font-semibold text-[#101828]">
                    {course.title}
                  </h3>
                  <img src={wrapIcon} alt="icon" />
                </div>
                <p className="mt-3 text-[#667085]">{course.description}</p>
                <div className="mt-3 flex items-center gap-2.5">
                  <span className="text-[#3FC89E]">{course.rating.rate}</span>
                  <img src={ratingIcon} alt="rating" />
                  <span className="text-[#969696]">{course.rating.count}</span>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={course.instructor.avatar} alt="Instructor" />
                    <div className="text-[12px]">
                      <p className="text-[#101828]">{course.instructor.name}</p>
                      <p className="text-[#667085]">{course.enrolled}</p>
                    </div>
                  </div>
                  <p className="text-[20px] font-bold text-[#3FC89E] lg:text-2xl">
                    ${course.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="courses-pagination custom-pagination"></div>
      </div>
      <button
        type="button"
        className="mt-10 ml-[50%] -translate-x-1/2 cursor-pointer rounded-[8px] border border-[#D0D5DD] bg-[#F9FAFB] px-[15px] py-[7px]"
      >
        Explore All Programs
      </button>
    </>
  );
}
