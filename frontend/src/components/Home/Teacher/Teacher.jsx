import {
  linkedinIcon,
  teacherAvatar1,
  teacherAvatar2,
  teacherAvatar3,
  teacherAvatar4,
  twitterIcon,
} from "../../../assets/Home";
import { SectionHeader } from "../SectionHeader";
import TeacherCard from "./TeacherCard";
export default function Teacher() {
  return (
    <>
      <SectionHeader
        miniHeading="Tutors"
        heading="Meet the Heroes"
        subtext="On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities."
      />
      {/* Teacher Cards */}
      <div className="ml:grid-cols-[repeat(1,276px)] grid w-full justify-center gap-8 py-9 sm:grid-cols-[repeat(2,276px)] lg:mb-8 xl:grid-cols-[repeat(4,276px)]">
        <TeacherCard
          teacherAvatar={teacherAvatar1}
          teacherName="Theresa Webb"
          designation="Application Support Analyst Lead"
          bio="Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit."
          soicalMedia={[linkedinIcon, twitterIcon]}
        />
        <TeacherCard
          teacherAvatar={teacherAvatar2}
          teacherName="Courtney Henry"
          designation="Director, Undergraduate Analytics and Planning"
          bio="Lead engineering teams at Figma, Pitch, and Protocol Labs."
          soicalMedia={[linkedinIcon, twitterIcon]}
        />
        <TeacherCard
          teacherAvatar={teacherAvatar3}
          teacherName="Albert Flores"
          designation="Career Educator"
          bio="Former PM for Linear, Lambda School, and On Deck."
          soicalMedia={[linkedinIcon, twitterIcon]}
          customcss={"absolute bottom-[24px] left-[50%] -translate-[50%]"}
        />
        <TeacherCard
          teacherAvatar={teacherAvatar4}
          teacherName="Marvin McKinney"
          designation="Co-op & Internships Program & Operations Manager"
          bio="Former frontend dev for Linear, Coinbase, and Postscript."
          soicalMedia={[linkedinIcon, twitterIcon]}
        />
      </div>
    </>
  );
}
