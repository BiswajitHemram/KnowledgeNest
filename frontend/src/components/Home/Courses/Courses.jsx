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
  rating,
} from "../../../assets/Home";

export default function Courses() {
  return (
    <>
      <div className="mb-5 px-3 lg:mb-8 lg:px-10 2xl:container 2xl:mx-auto">
        <p className="font-semibold text-[#1A906B]">Explore Program</p>
        <h4 className="mt-[5px] mb-[15px] text-2xl font-semibold text-[#101828] md:text-3xl xl:text-4xl">
          Our Most Popular Class
        </h4>
        <p className="text-justify text-[#667085]">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="swiper-container ml:w-[368px] mm:container mm:mx-auto relative cursor-grab px-3 sm:w-[100%] lg:px-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={35}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image1}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Design
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Figma UI UX Design
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Use Figma to get a job in UI Design, User Interface, User
                Experience design.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar1} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image2}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Development
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Learn With Shoaib
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Design Web Sites and Mobile Apps that Your Users Love and Return
                to Again.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar2} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image3}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Development
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Building User Interface
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Learn how to apply User Experience (UX) principles to your
                website designs.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar3} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image1}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Design
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Figma UI UX Design
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Use Figma to get a job in UI Design, User Interface, User
                Experience design.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar1} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image2}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Development
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Learn With Shoaib
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Design Web Sites and Mobile Apps that Your Users Love and Return
                to Again.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar2} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ms:px-3.5 rounded-[8px] border border-[#e1d9d9] px-2.5 py-4 md:px-4 md:py-5 lg:px-6 lg:py-8">
            <img
              src={image3}
              alt=""
              className="w-full object-cover object-center"
            />
            <div className="mt-8">
              <h4 className="ms:text-[13px] text-[12px] font-semibold text-[#1A906B]">
                Development
              </h4>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="ms:text-2xl w-[calc(100%-48px)] overflow-hidden text-[18px] font-semibold text-ellipsis whitespace-nowrap text-[#101828]">
                  Building User Interface
                </h3>
                <img src={wrapIcon} alt="" />
              </div>
              <p className="mt-3 text-[#667085]">
                Learn how to apply User Experience (UX) principles to your
                website designs.
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[#3FC89E]">4.3</span>
                <img src={rating} alt="" />
                <span className="text-[#969696]">{"(16,843)"}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar3} alt="" />
                  <div className="ms:text-[13px] text-[12px]">
                    <p className="text-[#101828]">Jane Cooper</p>
                    <p className="text-[#667085]">2001 Enrolled</p>
                  </div>
                </div>
                <p className="ms:text-2xl text-[20px] font-bold text-[#3FC89E]">
                  $17.45
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </>
  );
}
