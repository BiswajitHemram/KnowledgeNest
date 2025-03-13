import React from "react";
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
  const categories = [
    {
      icon: artsDesignIcon,
      categoryName: "Art & Design",
      totalCourse: "8 Courses",
    },
    {
      icon: developmentIcon,
      categoryName: "Development",
      totalCourse: "38 Courses",
    },
    {
      icon: communicationIcon,
      categoryName: "Communication",
      totalCourse: "3 Courses",
    },
    {
      icon: videographyIcon,
      categoryName: "Videography",
      totalCourse: "4 Courses",
    },
    {
      icon: photographyIcon,
      categoryName: "Photography",
      totalCourse: "1 Courses",
    },
    {
      icon: marketingIcon,
      categoryName: "Marketing",
      totalCourse: "8 Courses",
    },
    {
      icon: contentWritingIcon,
      categoryName: "Content Writing",
      totalCourse: "38 Courses",
    },
    { icon: financeIcon, categoryName: "Finance", totalCourse: "3 Courses" },
    { icon: scienceIcon, categoryName: "Science", totalCourse: "4 Courses" },
    {
      icon: photographyIcon,
      categoryName: "Network",
      totalCourse: "1 Courses",
    },
  ];
  return (
    <>
      <SectionHeader
        miniHeading="Explore Categories"
        heading="Top Categories"
        subtext="Browse the most popular categories and find the perfect class for you."
        showButton={true}
        btnText="All Categories"
      />
      <div className="grid w-full grid-cols-[repeat(auto-fill,234px)] justify-center gap-8 py-9">
        {/* <CategoryCard
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
        /> */}
        {categories.map(({icon, categoryName, totalCourse}, index) => (
          <CategoryCard
            key={index}
            icon={icon}
            categoryName={categoryName}
            totalCourse={totalCourse}
          />
        ))}
      </div>
    </>
  );
}
