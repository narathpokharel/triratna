import React from "react";
import RegisterForm from "../components/Register";

export default function Register() {
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
      <RegisterForm />
    </div>
  );
}
