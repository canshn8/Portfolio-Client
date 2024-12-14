import Lab from "./pages/Lab";
import Home from "./pages/Home";
import { useEffect } from "react";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Layout from "./component/Layout";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/userSlice";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  }, [dispatch]);



  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/skills", element: <Skills /> },
    { path: "/sign", element: <Account /> },
    { path: "/lab", element: <Lab /> },
    { path: "/lab/:projectId", element: <Project /> },
  ]);

  return routes;
};

const App = () => {
  return (
      <Layout>
        <Router>
          <AppRoutes />
        </Router>
      </Layout>
  );
};

export default App;
