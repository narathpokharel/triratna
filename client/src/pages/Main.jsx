import React from "react";
import CourseList from "../components/CourseList";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {
  const [courses, setCourses] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("USER"));
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {" "}
      {user && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "70%",
              height: "20vh",
              background: "#ECEFF1",
              margin: "auto",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h4> Let's starting learning {user.first_name} </h4>
          </div>
        </div>
      )}
      {user && (
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "30vh",
            margin: "auto",
          }}
        >
          {" "}
          {courses.map((course, index) => (
            <CourseList key={index} course={course} />
          ))}{" "}
        </div>
      )}
      {!user && (
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "70vh",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            background: "#ECEFF1",
          }}
        >
          {" "}
          <h5>
            <Link to={"/login"}>Login</Link> or
            <Link to={"/register"}> Register</Link> to access content
          </h5>
        </div>
      )}
      {user && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "70%",
              height: "30vh",
              background: "#ECEFF1",
              margin: "auto",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h5>intro</h5>
          </div>
        </div>
      )}
    </div>
  );
}
