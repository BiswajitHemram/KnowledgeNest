import { HeroSection } from "./Hero";
import { Brand } from "./Brand";
import { Categories } from "./Categories";
import { Courses } from "./Courses";
import { StudentDashboard } from "./StudentDashboard";
import { Teacher } from "./Teacher";
import { Review } from "./Review";
import { Blog } from "./Blog";

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

      {/* Student Review */}
      <Review />

      {/* Blog */}
      <Blog />
    </>
  );
}
