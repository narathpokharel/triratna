import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";

const RegisterForm = () => {
  const [last_name, setLastName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      last_name,
      first_name,
      email,
      password,
      confirm_password,
    };

    axios
      .post("http://localhost:8000/api/register", data)
      .then((res) => navigate("/"))
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ width: 320, margin: "auto" }}>
        {}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Last Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              name='last_name'
              value={last_name}
              type='text'
              placeholder='Enter Last Name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              {errors?.last_name?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              name='first_name'
              value={first_name}
              type='text'
              placeholder='Enter First Name'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              {errors?.first_name?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              name='email'
              value={email}
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              {errors?.email?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              {errors?.password?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              name='confirm_password'
              value={confirm_password}
              type='password'
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please confirm your password
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <div>
          {" "}
          <Link to='/login'>
            {/* link to register page */}
            Have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
