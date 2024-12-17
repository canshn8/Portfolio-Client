import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/userSlice";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Lab from "./pages/Lab";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Layout from "./component/Layout";
import CreateCard from "./pages/CreateCard";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log("User from localStorage:", user);
      dispatch(loginSuccess(user)); 
    }
  }, [dispatch]);


  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/create", element: <CreateCard /> },
    { path: "/sign", element: <Account /> },
    { path: "/profile", element: <Profile /> },
    { path: "/lab", element: <Lab /> },
    { path: "/lab/:projectId", element: <Project /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
