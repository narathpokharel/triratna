import React from "react";
import LoginForm from "../components/Login";

export default function Login() {
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
      <LoginForm />
    </div>
  );
}
