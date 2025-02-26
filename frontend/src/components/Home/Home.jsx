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
import { StudentDashboard } from "./StudentDashboard";
import { Teacher } from "./Teacher";

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

      {/* Student Dashboard */}
      <StudentDashboard />

      {/* Teacher Profile */}
      <Teacher />
    </>
  );
}
