import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Context/ContextApi";

function Private({ children }) {
  useContext;
  Navigate;
  const { CurrentUser } = useContext(Store);

  if (!CurrentUser) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default Private;
