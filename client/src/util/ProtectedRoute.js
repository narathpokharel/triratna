//react-router protected route
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  //get user from local storage
  const user = localStorage.getItem("USER");
  return user ? <Outlet /> : <Navigate to='/login' />;
}
