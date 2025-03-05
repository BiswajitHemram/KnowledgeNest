// not using external css file because we already have another component in same place which already having css as same as Review.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { pageLogo } from "../../../assets/logo";
import { studentReviewAvatar1 } from "../../../assets/Home";
import { SectionHeader } from "../SectionHeader";

export default function Review() {
  const studentReview = [
    {
      id: crypto.randomUUID(),
      studentReviewPara:
        "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
      studentName: "Jacob Jones",
      studentPic: studentReviewAvatar1,
      collegeOrCompany: "Student, National University",
    },
    {
      id: crypto.randomUUID(),
      studentReviewPara:
        "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
      studentName: "Jacob Jones",
      studentPic: studentReviewAvatar1,
      collegeOrCompany: "Student, National University",
    },
  ];
  return (
    <>
      <SectionHeader
        miniHeading="Student Reviews"
        heading="Hear from Our Students"
        subtext="Real feedback from real learners — see how KnowledgeNest is helping students achieve their goals."
      />
      <div className="swiper-container mm:container mm:mx-auto ml:px-6 relative cursor-grab py-8">
        <Swiper
          spaceBetween={10}
          pagination={{
            el: ".student-review-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {studentReview.map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="flex! flex-col items-center justify-center gap-4 rounded-[8px] border border-[#e1d9d9] px-2.5 py-12 lg:gap-8 lg:px-5"
              >
                <img src={pageLogo} alt="" className="w-[80px]" />
                <p className="text-space-cadet text-center text-2xl font-medium lg:w-[90%] lg:text-5xl">
                  {item.studentReviewPara}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.studentPic}
                    alt=""
                    className="text-cadet-blue w-10 lg:w-auto"
                  />
                  <p className="mt-3">{item.studentName}</p>
                  <p className="mm:text-start text-medium-gray text-center">
                    {item.collegeOrCompany}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="student-review-pagination custom-pagination"></div>
      </div>
    </>
  );
}
