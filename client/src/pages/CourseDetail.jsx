import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Course from "../components/CourseDetail";

export default function CourseDetail() {
  const [course, setCourse] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log("Course", course);
  return (
    <div>
      <Course course={course} />
    </div>
  );
}
