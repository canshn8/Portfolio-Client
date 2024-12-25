import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { reqUrl } from "../api";


function Project() {
  const [project, setProject] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get(`${reqUrl}/project/` + id);
        setProject(res.data);
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };
    getProject();
  }, [id]);

  const processImagePaths = (paths) => {
    return paths.map((imgPath) => {
      return imgPath ? imgPath.split('/').pop() : '';
    });
  };
  useEffect(() => {
    console.log(project.img);
  }, [project]);

  const formattedTags = Array.isArray(project?.tag)
  ? project.tag 
  : project?.tag?.split(',').map(tag => tag.trim().replace(/"/g, '')) || [];


  return (
    <div>
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="bg-transparent bg-opacity-25 rounded-3xl p-6 text-gray-100 relative z-10">
          <div class="flex flex-wrap items-center">
            <div class="flex w-full h-48 md:h-64 lg:h-72 relative">
              <div class="w-8/12 pr-4 relative">
              <img
                src={`http://localhost:5000/${project.mainImage}`} 
                className="w-full h-full object-fill object-top rounded-lg bg-white " 
                alt="Main Image"
                />

              {/* {Array.isArray(project.additionalImages) && project.additionalImages.length > 0 && (
                project.additionalImages.map((image, index) => (
                  <img key={index} src={`http://localhost:5000/${image}`} alt={`Additional Image ${index + 1}`} />
                ))
              )} */}

              </div>

              <div class="w-4/12 h-full rounded-3xl" >
                <div class="flex flex-col w-full h-full">
                  <div class="flex-1 pb-2">
                    <div class="w-full h-full relative">
                    <img
                        src={`http://localhost:5000/${project.additionalImages?.[0]}`}
                        alt="Additional Image 1"                        
                        className="absolute w-full h-full object-fill object-center rounded-3xl bg-white "
                      />
                    </div>
                  </div>

                  <div class="flex-1 pt-2">
                    <div class="w-full h-full relative">
                    <img
                        src={`http://localhost:5000/${project.additionalImages?.[1]}`}
                        alt="Additional Image 2"                        
                        className="absolute w-full h-full object-fill object-center rounded-3xl bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full pt-8 flex flex-col justify-between">
              <div>
                <h2 class="font-bold text-xl">{project?.title}</h2>

                <div className="flex flex-wrap pt-4 mb-2">
                  {formattedTags?.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-flex px-3 py-1 mb-2 mr-2 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  rounded-full"
                  >
                    #{tag}
                  </div>
                ))}
                </div>


                <p class="text-xs leading-relaxed text-gray-50">
                  {project?.desc}
                </p>

                <ul class="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                  {project?.explain?.map((explain, index) => (
                    <li key={index}>{explain}</li>
                  ))}
                </ul>
              </div>

              <div class="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                <Link to={project?.previewLink}>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Preview{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
