import React from "react";
import EditCourseForm from "../components/CourseEdit";

export default function CourseEdit() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <EditCourseForm />
    </div>
  );
}
