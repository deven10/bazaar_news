import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const TokenRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};
