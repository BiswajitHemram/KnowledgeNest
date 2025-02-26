import React from "react";
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
      <div className="brand my-16 flex w-full overflow-hidden 2xl:container 2xl:mx-auto">
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
