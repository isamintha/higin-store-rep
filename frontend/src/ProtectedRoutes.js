import React from "react";
import { Outlet } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";

export default function ProtectedRoutes({ userName }) {
  return userName ? <Outlet /> : <SigninScreen />;
}
