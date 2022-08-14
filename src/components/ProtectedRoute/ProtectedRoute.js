import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="./singin" replace={true} />
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;