import { Blog, Brand, Categories, Courses, Hero, Review, StudentDashboard, Teacher } from "../components";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

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
