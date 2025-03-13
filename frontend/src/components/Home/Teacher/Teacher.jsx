import {
  linkedinIcon,
  teacherAvatar1,
  teacherAvatar2,
  teacherAvatar3,
  teacherAvatar4,
  twitterIcon,
} from "../../../assets/Home";
import CommonCard from "../CommonCard";
// import { teacherAvatar2 } from "../../../assets/Home";
import SectionHeader from "../SectionHeader";

export default function Teacher() {
  const teachers = [
    {
      teacherAvatar: teacherAvatar1,
      teacherName: "Theresa Webb",
      designation: "Application Support Analyst Lead",
      bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      socialMedia: [linkedinIcon, twitterIcon],
    },
    {
      teacherAvatar: teacherAvatar2,
      teacherName: "Courtney Henry",
      designation: "Director, Undergraduate Analytics and Planning",
      bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      socialMedia: [linkedinIcon, twitterIcon],
    },
    {
      teacherAvatar: teacherAvatar3,
      teacherName: "Albert Flores",
      designation: "Career Educator",
      bio: "Former PM for Linear, Lambda School, and On Deck.",
      socialMedia: [linkedinIcon, twitterIcon],
    },
    {
      teacherAvatar: teacherAvatar4,
      teacherName: "Marvin McKinney",
      designation: "Co-op & Internships Program & Operations Manager",
      bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
      socialMedia: [linkedinIcon, twitterIcon],
    },
  ];

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
        {teachers.map(
          (
            { teacherAvatar, teacherName, designation, bio, socialMedia },
            index,
          ) => {
            return (
              <CommonCard
                key={index}
                image={teacherAvatar}
                title={teacherName}
                subtitle={designation}
                description={bio}
                socialMedia={socialMedia}
                type="teacher"
                customTitleCss="text-space-cadet text-[18px] font-medium"
                customSubtitleCss="text-medium-sea-green mb-2"
                customDescriptionCss="text-medium-gray mx-auto w-[95%]"
                customCss="bg-[#b9cfe6]"
              />
            );
          },
        )}
      </div>
    </>
  );
}
