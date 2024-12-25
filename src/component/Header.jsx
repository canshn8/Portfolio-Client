import React, {useState} from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";
import PP from "../uploads/fixed.jpg";
import { reqUrl } from "../api";
import axios from "axios";

const Header =() =>  {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsModalOpen(false);
  };


  const handleDownloadTr = async () => {
    try {
      const response = await axios({
        url: reqUrl+`/turkish-cv.pdf`, 
        method: "GET",
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV_TR.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Dosya indirilirken hata oluştu:", error);
    }
  };
  
  
  const handleDownloadEn = async () => {
    try {
      const response = await axios({
        url: `${reqUrl}/english-cv.pdf`, 
        method: "GET",
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV_EN.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Dosya indirilirken hata oluştu:", error);
    }
  };

  return (
    <div class="mt-36 max-w-screen-lg mx-auto md:px-16 px-1">
      <img
        class="absolute object-contain top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rounded-full w-52 h-52  hover:scale-150"
        src={PP}
        alt="image description"
      />
      <h1 class="mb-4 text-sm font-bold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
        Hello I Am <span>Hasan Can Şahin</span>
      </h1>
      <h1 class="mb-4 mt-8 text-3xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
        A{" "}
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          FullStack Web Developer
        </span>{" "}
        Who{" "}
      </h1>
      <h3 class="mb-4 mt-10 text-sm font-bold text-gray-900 dark:text-white md:text-xl lg:text-base">
        I am a self-taught FullStack Web Developer and have been developing
        myself in the <br /> industry for 3+ years. I create meaningful and
        enjoyable projects that create a balance <br /> between user needs and
        business goals.
      </h3>
      <span className="flex gap-6 mt-8">
        <a target="_blank" href="https://github.com/canshn8/">
          <FiGithub color="#d1dde6" size={"30px"} />
        </a>
        <a target="_blank" href="https://linkedin.com/in/canshn">
          <CiLinkedin color="#d1dde6" size={"30px"} />
        </a>
        <FiInstagram color="#d1dde6" size={"30px"} />
      </span>
      <button
        onClick={() => setIsModalOpen(true)}
        class="md:text-xl xl:text-base  flex gap-4 mt-14 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Download <FaRegFilePdf size={"30px"} />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 text-white bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">CV Dilini Seçiniz</h3>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleDownloadTr ('Türkçe')}
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              >
                Türkçe
              </button>
              <button
                onClick={() => handleDownloadEn ('English')}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                English
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full text-gray-500 hover:text-gray-700"
            >
              Kapat
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
export default Header;
