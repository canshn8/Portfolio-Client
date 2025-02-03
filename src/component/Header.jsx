import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";
import PP from "../assets/fixed.jpg";

const Header = () => {
  return(
   <>
     <div className="mt-36 max-w-screen-lg mx-auto md:px-16 px-1">
      <img
        className="absolute object-contain top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rounded-full w-52 h-52  hover:scale-150"
        src={PP}
        alt="image description"
      />
      <h1 className="mb-4 text-sm font-bold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
        Hello I Am <span>Hasan Can Şahin</span>
      </h1>
      <h1 className="mb-4 mt-8 text-3xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
        A{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          FullStack Web Developer
        </span>{" "}
        Who
      </h1>
      <h3 className="mb-4 mt-10 text-sm font-bold text-gray-900 dark:text-white md:text-xl lg:text-base">
        I am a self-taught FullStack Web Developer and have been developing
        myself in the <br /> industry for 3+ years. I create meaningful and
        enjoyable projects that create a balance <br /> between user needs and
        business goals.
      </h3>
      <span className="flex gap-6 mt-8">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/canshn8/">
          <FiGithub color="#d1dde6" size={"30px"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/canshn">
          <CiLinkedin color="#d1dde6" size={"30px"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">
          <FiInstagram color="#d1dde6" size={"30px"} />
        </a>
      </span>
      <span className="text-gray-50">
        <button
          type="button"
          className="md:text-xl xl:text-base flex gap-4 mt-14 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Download <FaRegFilePdf size={"30px"} />
        </button>
      </span>
    </div>

    <article class="mx-auto max-w-screen-xl mt-14 px-4 2xl:px-0 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full object-cover"
                    src={PP}
                    alt="Hasan Can Şahin"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Hasan Can Şahin
                    </a>
                    <p class="text-base lead text-gray-500 dark:text-gray-400">
                      Junior Full-Stack Web Developer
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                About Me
              </h1>
            </header>
            <p class="lead">
              I am a developer aiming to specialize in software development, offering creative solutions and contributing to projects. I
              have experience with full-stack technologies and actively play a role in team collaboration.
            </p>
            <p></p>
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
        
            <h2>EXPERIENCE</h2>
              <p className="">
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong>OzzTech Information Security and Software Ltd. (Internship - 10 Months)</strong>
                    <ul className="list-disc ml-6">
                      <li>Developed, designed, and implemented a CRM project using Angular and .NET.</li>
                      <li>Optimized CI/CD processes to accelerate software delivery.</li>
                      <li>Contributed significantly by developing user-friendly, performance-oriented, and mobile-responsive solutions.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Freelance Project Development</strong>
                    <ul className="list-disc ml-6">
                      <li>Designed professional e-commerce websites using the İkas platform and managed their operational processes.</li>
                      <li>Integrated WooCommerce and ran effective digital marketing campaigns.</li>
                      <li>Created corporate and individual websites for various sectors, ensuring customer satisfaction.</li>
                      <li>Developed mobile-responsive and SEO-optimized websites to help clients achieve their goals.</li>
                    </ul>
                  </li>
                </ul>
              </p>
              <h2>Education</h2>
            <p className="">
              <ul>
                <li>
                Nahit Menteşe Vocational and Technical Anatolian High
                  School
                  Information Technologies (2020-2024)
                </li>
              </ul> 
           </p>
            <h2>LANGUAGES</h2>
            <p className="">
              <ul>
                <li>
                English: A2-B1 level writing and reading skills. Experienced in reading and writing technical documents.
                </li>
              </ul>
            </p>
          </article>
   </>
  );
};

export default Header;
