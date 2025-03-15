import { useState, useId } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterCard = ({ filterName, visible = false, data }) => {
  const [isActive, setIsActive] = useState(visible);
  const uniquePrefix = useId();

  return (
    <div
      className={`border-t transition-all duration-300 ${isActive ? "py-3" : "py-2"}`}
    >
      {/* Header Section */}
      <div
        className={`flex cursor-pointer items-center justify-between ${isActive && "mb-4"}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h4 className="text-xl font-bold capitalize">{filterName}</h4>
        {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} `}
      >
        {data.map((item) => {
          const checkboxId = `${uniquePrefix}-${item.name}`;

          return (
            <div
              key={checkboxId}
              className="mb-2 flex items-center justify-between"
            >
              <div>
                <input
                  type="checkbox"
                  className="mr-2.5 accent-blue-500"
                  id={checkboxId}
                />
                <label
                  htmlFor={checkboxId}
                  className="cursor-pointer capitalize"
                >
                  {item.name}
                </label>
              </div>
              <p>{item.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCard;
