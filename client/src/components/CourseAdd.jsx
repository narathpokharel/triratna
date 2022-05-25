import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const RegisterCourseForm = () => {
  const [name, setName] = useState("");
  const [format, setFormat] = useState("");
  const [description, setDescription] = useState("");
  const [credit, setCredit] = useState("");
  const [starting_date, setStartingDate] = useState("");
  const [duration, setDuration] = useState("");
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("USER"));
  const full_name = user.first_name + " " + user.last_name;
  console.log("user", full_name);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    const data = {
      name,
      description,
      format,
      credit,
      starting_date,
      duration,
      createdBy: full_name,
    };
    console.log("Data", data);
    axios
      .post("http://localhost:8000/api/courses", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("ERR", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
    if (errors !== {}) {
      setValidated(true);
    }
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "55vw" }}
        noValidate
        validated={validated}
      >
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Title</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Control
                name='name'
                value={name}
                type='text'
                placeholder='Enter course title'
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.name?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>{" "}
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Total Credits</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Control
                name='credit'
                value={credit}
                type='text'
                placeholder='Enter course credit'
                onChange={(e) => setCredit(e.target.value)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.credit?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Format</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Select
                aria-label='Default select example'
                name='format'
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                required
              >
                <option value=''>Select course format</option>
                <option value='online'>Online</option>
                <option value='physical'>Physical</option>
                <option value='blended'>Blended</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                {errors?.format?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Starting Date</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Control
                name='starting_date'
                value={starting_date}
                type='date'
                placeholder='Enter starting date'
                onChange={(e) => setStartingDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.starting_date?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Decription</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Control
                name='description'
                value={description}
                type='text'
                placeholder='Enter course description'
                onChange={(e) => setDescription(e.target.value)}
                as='textarea'
                rows='3'
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.description?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Length</Form.Label>
            <InputGroup hasValidation>
              {" "}
              <Form.Control
                name='duration'
                value={duration}
                type='number'
                placeholder='Enter course length'
                onChange={(e) => setDuration(e.target.value)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors?.duration?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            marginTop: "20px",
          }}
        >
          {" "}
          <Button variant='primary' type='submit'>
            Add this course
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterCourseForm;
