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
} from "../../assets/Home";

import "./Home.css";
import { HeroSection } from "./Hero";
import { Brand } from "./Brand";
import { Categories } from "./Categories";
import { Courses } from "./Courses";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Collaboration */}
      <Brand />

      {/* Top Categories */}
      <Categories />

      {/* Explore Courses */}
      <Courses />
    </>
  );
}
