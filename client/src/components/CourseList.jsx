//render pets list
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseList = ({ course }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "20px",
        borderRadius: "7px",
        height: "fit-content",
      }}
    >
      <Card.Body
        as={Link}
        to={`/course/${course._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {course.format}
        </Card.Subtitle>
        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CourseList;
