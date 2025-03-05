import React from "react";
import CardCreator from "./CardCreator";

export default function StudentDashboard() {
  return (
    <>
      <div className="mt-[90px] flex flex-wrap justify-center gap-8 py-9 lg:flex-nowrap">
        <CardCreator number="25K+" text="Active Student" />
        <CardCreator number="899" text="Total Courses" />
        <CardCreator number="158" text="Instructor" />
        <CardCreator number="100%" text="Satisfaction rate" />
      </div>
    </>
  );
}
