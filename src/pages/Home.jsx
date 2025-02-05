import React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import CurriculumVitae from "../component/CurriculumVitae";
import Body from "../component/Body";
import Projects from "../component/Projects";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Projects />
    </div>
    
  );
}

export default Home;
