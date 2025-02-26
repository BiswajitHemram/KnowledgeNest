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
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <>
      {/* Top Categories Heading */}
      <div className="ml:flex-row ml:gap-0 ml:justify-between flex flex-col gap-8 px-3 lg:px-10 2xl:container 2xl:mx-auto">
        <div className="left">
          <h4 className="text-[20px] font-bold">Top Categories</h4>
          <p className="text-[14px] text-[#646464]">
            Explore our Popular Categories
          </p>
        </div>
        <button
          type="button"
          className="cursor-pointer self-center rounded-3xl border border-black px-[25px] py-[5px]"
        >
          All Categories
        </button>
      </div>
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
