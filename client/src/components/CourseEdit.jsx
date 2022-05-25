import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditCourseForm = () => {
  const [name, setName] = useState("");
  const [format, setFormat] = useState("");
  const [description, setDescription] = useState("");
  const [credit, setCredit] = useState("");
  const [starting_date, setStartingDate] = useState("");
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses/${id}`)
      .then((res) => {
        setName(res.data.name);
        setFormat(res.data.format);
        setDescription(res.data.description);
        setCredit(res.data.credit);
        setStartingDate(res.data.starting_date);
        setDuration(res.data.duration);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      format,
      credit,
      starting_date,
      duration,
    };

    axios
      .put(`http://localhost:8000/api/courses/${id}`, data)
      .then((res) => navigate("/"))
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ width: "55vw" }}>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Title</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                name='name'
                value={name}
                type='text'
                placeholder='Enter course title'
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a course title {errors?.name}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>{" "}
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Total Credits</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                name='credit'
                value={credit}
                type='text'
                placeholder='Enter course credit'
                onChange={(e) => setCredit(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a course credit
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Format</Form.Label>
            <InputGroup hasValidation>
              <Form.Select
                aria-label='Default select example'
                name='format'
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value=''>Course formats</option>
                <option value='online'>Online</option>
                <option value='physical'>Physical</option>
                <option value='blended'>Blended</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                Please enter a course format
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Starting Date</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                name='starting_date'
                value={starting_date}
                type='date'
                placeholder='Enter starting date'
                onChange={(e) => setStartingDate(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a starting date
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Decription</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                name='description'
                value={description}
                type='text'
                placeholder='Enter course description'
                onChange={(e) => setDescription(e.target.value)}
                as='textarea'
                rows='3'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a course description
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='formBasicEmail'>
            <Form.Label>Course Length</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                name='duration'
                value={duration}
                type='number'
                placeholder='Enter course length'
                onChange={(e) => setDuration(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a course length
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
            Update course
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditCourseForm;
