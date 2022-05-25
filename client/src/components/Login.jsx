import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:8000/api/login", data)
      .then((res) => {
        console.log("res", res);
        const userData = {
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          isAuthenticated: true,
        };

        localStorage.setItem("USER", JSON.stringify(userData));

        if (res.data.message === "User not found") {
          setErrors({
            email: "User not found",
          });
        } else if (res.data.message === "Wrong password") {
          setErrors({
            password: "Wrong password",
          });
        }
        navigate("/");
      })
      .catch((err) => {
        console.log("ERR", err);
        setErrors(err.data);
      });
    if (errors !== {}) {
      setValidated(true);
    }
  };

  return (
    <div>
      {" "}
      <Form
        onSubmit={handleSubmit}
        style={{ width: 320 }}
        noValidate
        validated={validated}
      >
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            {" "}
            <Form.Control
              name='email'
              value={email}
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email}
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
              required
            />
            <Form.Control.Feedback type='invalid'>
              {errors?.name?.passo}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <div>
          <Link to='/register'>You don't have an account?</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
