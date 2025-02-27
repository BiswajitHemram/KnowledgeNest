import {
  linkedinIcon,
  teacherAvatar1,
  teacherAvatar2,
  teacherAvatar3,
  teacherAvatar4,
  twitterIcon,
} from "../../../assets/Home";
import TeacherCard from "./TeacherCard";
export default function Teacher() {
  return (
    <>
      <div className="mt-10 mb-5 flex items-center flex-col px-3 lg:mb-8 lg:px-10 2xl:container 2xl:mx-auto">
        <p className="font-semibold text-[#1A906B]">Tutors</p>
        <h4 className="mt-[5px] mb-[15px] text-2xl font-semibold text-[#101828] md:text-3xl xl:text-4xl">
          Meet the Heroes
        </h4>
        <p className="text-center text-[#667085] w-[85%] lg:w-[60%] xl:w-[42%]">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
      </div>
      {/* Teacher Cards */}
      <div className="grid w-full ml:grid-cols-[repeat(1,276px)] sm:grid-cols-[repeat(2,276px)] xl:grid-cols-[repeat(4,276px)] gap-8 px-3 py-9 lg:mb-8 justify-center  lg:px-10 2xl:container 2xl:mx-auto">
        <TeacherCard teacherAvatar={teacherAvatar1} teacherName="Theresa Webb" designation="Application Support Analyst Lead" bio="Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit." soicalMedia={[linkedinIcon, twitterIcon]} />
        <TeacherCard teacherAvatar={teacherAvatar2} teacherName="Courtney Henry" designation="Director, Undergraduate Analytics and Planning" bio="Lead engineering teams at Figma, Pitch, and Protocol Labs." soicalMedia={[linkedinIcon, twitterIcon]} />
        <TeacherCard teacherAvatar={teacherAvatar3} teacherName="Albert Flores" designation="Career Educator" bio="Former PM for Linear, Lambda School, and On Deck." soicalMedia={[linkedinIcon, twitterIcon]} />
        <TeacherCard teacherAvatar={teacherAvatar4} teacherName="Marvin McKinney" designation="Co-op & Internships Program & Operations Manager" bio="Former frontend dev for Linear, Coinbase, and Postscript." soicalMedia={[linkedinIcon, twitterIcon]} />
      </div>
    </>
  );
}
