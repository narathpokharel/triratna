import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Course({ course }) {
  const navigate = useNavigate();

  const handleCourseDelete = () => {
    axios
      .delete(`http://localhost:8000/api/courses/${course._id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "end",
          alignItems: "end",
          margin: "auto",
          padding: "10px",
        }}
      >
        <Link to={`/edit/${course._id}`}>Edit Course</Link>
      </div>
      {/* all course details */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "70%",
            height: "70vh",
            background: "#ECEFF1",
            margin: "auto",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <div style={{ padding: "10px" }}>
              {" "}
              <h4>Let's starting learning {course.name}</h4>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              <h5>Created By : {course?.createdBy}</h5>
            </div>
          </div>
          <div style={{ padding: "5px" }}>
            <small
              style={{ padding: "5px", fontWeight: 600, fontSize: "12px" }}
            >
              format: {course.format}
            </small>
            <small
              style={{ padding: "5px", fontWeight: 600, fontSize: "12px" }}
            >
              {" "}
              Duration: {course.duration} weeks
            </small>
            <small
              style={{ padding: "5px", fontWeight: 600, fontSize: "12px" }}
            >
              {" "}
              Created On :{" "}
              {moment(course.updatedAt).format("MMMM Do YYYY h:mm a")}
            </small>
            <small
              style={{ padding: "5px", fontWeight: 600, fontSize: "12px" }}
            >
              Updated On :{" "}
              {moment(course.createdAt).format("MMMM Do YYYY   h:mm a")}
            </small>
          </div>
          <div style={{ padding: "5px" }}>
            <h6>Course Description</h6>
            <p>{course.description}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "end",
          alignItems: "end",
          margin: "auto",
          padding: "10px",
        }}
      >
        <Button variant='primary' onClick={handleCourseDelete}>
          Drop Course
        </Button>
      </div>
    </div>
  );
}
