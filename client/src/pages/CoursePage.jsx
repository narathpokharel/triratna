import React from "react";
import RegisterCourseForm from "../components/CourseAdd";

export default function CoursePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "30vh",
      }}
    >
      <RegisterCourseForm />
    </div>
  );
}
