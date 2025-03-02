import {
  artsDesignIcon,
  communicationIcon,
  contentWritingIcon,
  developmentIcon,
  financeIcon,
  marketingIcon,
  photographyIcon,
  scienceIcon,
  videographyIcon,
} from "../../../assets/Home";
import { SectionHeader } from "../SectionHeader";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <>
      {/* Top Categories Heading */}
      <SectionHeader
        miniHeading="Explore Categories"
        heading="Top Categories"
        subtext="Browse the most popular categories and find the perfect class for you. "
        showButton={true}
        btnText="All Categories"
      />
      {/* Category Card */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,234px)] justify-center gap-8 px-3 py-9 2xl:container 2xl:mx-auto">
        <CategoryCard
          icon={artsDesignIcon}
          categoryName="Art & Design"
          totalCourse="8 Courses"
        />
        <CategoryCard
          icon={developmentIcon}
          categoryName="Development"
          totalCourse="38 Courses"
        />
        <CategoryCard
          icon={communicationIcon}
          categoryName="Communication"
          totalCourse="3 Courses"
        />
        <CategoryCard
          icon={videographyIcon}
          categoryName="Videography"
          totalCourse="4 Courses"
        />
        <CategoryCard
          icon={photographyIcon}
          categoryName="Photography"
          totalCourse="1 Courses"
        />
        <CategoryCard
          icon={marketingIcon}
          categoryName="Marketing"
          totalCourse="8 Courses"
        />
        <CategoryCard
          icon={contentWritingIcon}
          categoryName="Content Writing"
          totalCourse="38 Courses"
        />
        <CategoryCard
          icon={financeIcon}
          categoryName="Finance"
          totalCourse="3 Courses"
        />
        <CategoryCard
          icon={scienceIcon}
          categoryName="Science"
          totalCourse="4 Courses"
        />
        <CategoryCard
          icon={photographyIcon}
          categoryName="Network"
          totalCourse="1 Courses"
        />
      </div>
    </>
  );
}
