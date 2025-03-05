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
  return (
    <>
      <div className="brand my-[45px] flex w-full overflow-hidden sm:my-[60px]">
        <LogoContainer
          imgArray={[
            duolingoIcon,
            codeCovIcon,
            magicLeapIcon,
            userTestingIcon,
            duolingoIcon,
          ]}
        />
        <LogoContainer
          imgArray={[
            duolingoIcon,
            codeCovIcon,
            magicLeapIcon,
            userTestingIcon,
            duolingoIcon,
          ]}
        />
      </div>
    </>
  );
}
