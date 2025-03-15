import React from "react";
import { data } from "../../../sample";
import FilterCard from "./FilterCard";

export default function FilterComponent({ filterSectionVisible }) {
  const filters = [
    { name: "Category", data: data[0].categories },
    { name: "Instructor", data: data[0].instructor },
    { name: "Price", data: data[0].price },
    { name: "Review", data: data[0].review },
    { name: "Level", data: data[0].level },
  ];

  return (
    <div
      className={`overflow-hidden transition-all duration-500  md:shrink-0 ${filterSectionVisible ? "w-mm:[300px] ms:w-[290px] max-h-[1050px] min-w-[185px] opacity-100 sm:mr-5" : "mr-0 max-h-0 w-0 opacity-0"} `}
    >
      {filters.map(({ name, data }) => (
        <FilterCard key={name} filterName={name} data={data} />
      ))}
    </div>
  );
}
