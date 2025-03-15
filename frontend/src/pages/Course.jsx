import { useState } from "react";
import {
  CoursesContainer,
  FilterComponent,
  SearchControls,
} from "../components";
import SectionHeader from "../components/SectionHeader";

export default function Course() {
  const [filterSectionVisible, setFilterSectionVisible] = useState(true);

  return (
    <>
      <SectionHeader
        heading="All Courses"
        showSearch={true}
        searchText="Search Your Courses"
        marginTop="mt-[10px]"
      />
      <div className="text-space-cadet mt-10">
        {/* Search & filter controls */}
        <SearchControls
          filterSectionVisible={filterSectionVisible}
          setFilterSectionVisible={setFilterSectionVisible}
        />

        {/* Layout for filter & course section */}
        <div
          className={`mt-7 flex flex-col items-center overflow-hidden transition-all duration-500  sm:flex-row sm:items-stretch ${filterSectionVisible ? "gap-5" : "gap-0"}`}
        >
          {/* Filter Section */}
          <FilterComponent filterSectionVisible={filterSectionVisible} />

          {/* Course Section */}
          <div
            className={`mm:grid-cols-[repeat(auto-fill,300px)] duration-500  grid w-full grid-cols-[repeat(auto-fill,minmax(205px,290px))] justify-center gap-8 pb-9 sm:grid-cols-[repeat(auto-fill,330px)]`}
          >
            {/* <div className="flex h-96 items-center justify-center rounded-lg bg-gray-200">
              Course Cards (Placeholder)
            </div> */}
            <CoursesContainer />
          </div>
        </div>
      </div>
    </>
  );
}
