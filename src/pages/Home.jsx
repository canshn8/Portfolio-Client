import React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Body from "../component/Body";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import Drawer from "../component/Drawer";
import Filter from "../component/Filter";

const Home = () => {
  return (
  //   <div class="flex flex-col md:flex-row gap-4 p-4">
  //   <div class="flex-4 p-4  text-white">
  //     <Filter />
  //   </div>
    
    <div class=" p-4  text-white">
      <Projects />
    </div>
  

  );
};

export default Home;
