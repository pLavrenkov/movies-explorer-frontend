import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="./signin" replace={true} />
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;