import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  return (props) => {
    const { currentUser } = useSelector((state) => state.user);

    // if (!currentUser) {
    //   return <Navigate to="/" />; 
    // }
    {/*Kullanıcıyı Zorunlu Girişe Zorlamak İçin Bu Yorum Satırı Açılır */}

    return <Component {...props} />;
  };
};

export default withAuth;
