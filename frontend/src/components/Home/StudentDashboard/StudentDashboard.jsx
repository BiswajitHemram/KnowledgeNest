import React from "react";
import CardCreator from "./CardCreator";

export default function StudentDashboard() {
  return (
    <>
      <div className="mt-[90px] flex flex-wrap gap-8 px-3 justify-center lg:flex-nowrap lg:px-10 2xl:container 2xl:mx-auto">
        <CardCreator number="25K+" text="Active Student" />
        <CardCreator number="899" text="Total Courses" />
        <CardCreator number="158" text="Instructor" />
        <CardCreator number="100%" text="Satisfaction rate" />
      </div>
    </>
  );
}
