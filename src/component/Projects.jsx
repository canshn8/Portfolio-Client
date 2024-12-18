import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/project");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProject(); 
  }, []);


  return (


  <div class="flex flex-col md:flex-row mt-10">
    <div class="md:w-1/5 p-4 mt-12 text-white">
      <Filter />
    </div>


    <div class="md:w-4/5 p-0 flex flex-col items-center justify-center mt-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects?.map((project) => (
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-6 flex-col">
            <div class="flex flex-wrap items-center mb-2 justify-center">
              <div class="w-auto h-auto mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white">
                <img
                  src="https://i0.wp.com/softwarespace.ie/wp-content/uploads/2022/08/software-development-project-ideas.png?fit=599%2C399&ssl=1"
                  class="w-72 h-48 object-fill rounded-lg bg-white"
                />
              </div>
              <h2 class="text-white mt-4 dark:text-white text-lg font-medium">
                {project?.title}
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                {project?.desc}
              </p>
              <Link
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                to={`/lab/${project?._id}`}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>


  </div>
  );
}
