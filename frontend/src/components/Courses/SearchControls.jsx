import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

const FilterButton = ({ filterSectionVisible, setFilterSectionVisible }) => (
  <button
    type="button"
    className="hover:border-medium-sea-green cursor-pointer flex h-[58px] items-center gap-1.5 rounded-sm border border-[#777373] px-3 py-2 font-medium"
    onClick={() => setFilterSectionVisible((prev) => !prev)}
  >
    <MdOutlineFilterList />
    <span>{filterSectionVisible ? "Hide Filter" : "Show Filter"}</span>
  </button>
);

const SortDropdown = () => (
  <div className="hover:border-medium-sea-green  rounded-sm border border-[#777373] px-3 py-2">
    <label htmlFor="sort-by" className="block text-xs font-medium">
      Sort by
    </label>
    <select id="sort-by" className="w-[150px] outline-none cursor-pointer">
      <option value="most-popular">Most Popular</option>
      <option value="highest-rated">Highest Rated</option>
      <option value="newest">Newest</option>
    </select>
  </div>
);

export default function SearchControls({
  filterSectionVisible,
  setFilterSectionVisible,
}) {
  return (
    <div className="filter-section">
      <div className="category-card:flex-row category-card:gap-0 flex flex-col items-center justify-between gap-5">
        <div className="text-space-cadet flex-wrap justify-center flex items-center gap-2.5">
          <FilterButton
            filterSectionVisible={filterSectionVisible}
            setFilterSectionVisible={setFilterSectionVisible}
          />
          <SortDropdown />
        </div>
        <p className="text-medium-gray font-medium">4,302 results</p>
      </div>
    </div>
  );
}
