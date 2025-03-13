import "./Brand.css";
import LogoContainer from "./LogoContainer";
import {
  codeCovIcon,
  duolingoIcon,
  magicLeapIcon,
  userTestingIcon,
} from "../../../assets/Home";

// no of element to create

export default function Brand() {
  const logoArrayContainer = new Array(2).fill(0);
  return (
    <>
      <div className="brand my-[45px] flex w-full overflow-hidden sm:my-[60px]">
        {logoArrayContainer.map((el, idx) => (
          <LogoContainer
            key={idx}
            imgArray={[
              duolingoIcon,
              codeCovIcon,
              magicLeapIcon,
              userTestingIcon,
              duolingoIcon,
            ]}
          />
        ))}
      </div>
    </>
  );
}
