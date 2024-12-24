import React, { useState, useEffect } from 'react';
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Body from "../component/Body";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import Drawer from "../component/Drawer";
import Filter from "../component/Filter";

const Home = () => {
  const [showToast, setShowToast] = useState(false);


  useEffect(() => {
    setShowToast(true); 
    setTimeout(() => {
      setShowToast(false); 
    }, 5000);
  }, []);

  return (
    <>
       <div className="relative">
        {showToast && (
          <div className="fixed top-0 left-0 w-full p-4 bg-blue-500 text-white text-center shadow-lg z-50">
            <p className="font-semibold">
              Hoş geldiniz! Portföyümdeki bazı içerikler her an güncellenmektedir. Lütfen sık sık kontrol edin.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center justify-center mt-12">
          <div class="p-4 text-white">
            <Projects />
          </div>
        </div>
      </div>
    </>

  );
};

export default Home;
