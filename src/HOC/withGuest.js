import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withGuest = (Component) => {
  return (props) => {
    const { currentUser } = useSelector((state) => state.user);

    if (currentUser) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default withGuest;
