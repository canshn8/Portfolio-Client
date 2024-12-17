import React, { useState } from "react";
import { FaUpload } from "react-icons/fa"; 


const ProjectCardForm = () => {


  const [project, setProject] = useState({
    title: "",
    tag: [],
    desc: "",
    explain: [],
    previewLink: "",
    images: {
      main: "",
      secondary1: "",
      secondary2: "",
    },
  });
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" && value && project.tag.length < 5) {
      setProject({
        ...project,
        tag: [...project.tag, value],
      });
      setTagInput(""); 
    }
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg"];
      if (allowedTypes.includes(file.type)) {
        const imageUrl = URL.createObjectURL(file);
        setProject({
          ...project,
          images: {
            ...project.images,
            [field]: imageUrl,
          },
        });
      } else {
        alert("Lütfen yalnızca PNG veya JPG formatında resim yükleyin.");
      }
    }
  };

  return (
    <div className="bg-gray-800 p-8 mt-12 rounded-lg w-full max-w-screen-xl mx-auto">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Proje Kartı Oluştur</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Proje Başlığı
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={project.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium">
            Etiketler (Enter ile ekleyin, Maksimum 5 etiket)
          </label>
          <input
            id="tags"
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
            disabled={project.tag.length >= 5} 
          />
          <div className="flex flex-wrap mt-2">
            {project.tag.map((tag, index) => (
              <span
                key={index}
                className="mr-2 mb-2 text-xs bg-cyan-500 text-white px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium">
            Proje Açıklaması
          </label>
          <textarea
            id="desc"
            name="desc"
            value={project.desc}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="explain" className="block text-sm font-medium">
            Proje Detayları (Her bir madde için yeni satır ekleyin)
          </label>
          <textarea
            id="explain"
            name="explain"
            value={project.explain.join("\n")}
            onChange={(e) => {
              const value = e.target.value.split("\n");
              setProject({ ...project, explain: value });
            }}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
            rows="4"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="mainImage" className="block text-sm font-medium">
              Ana Resim
            </label>
            <div
              className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              onClick={() => document.getElementById("mainImage").click()}
            >
              <FaUpload className="text-2xl mx-auto" /> 
              <input
                id="mainImage"
                name="main"
                type="file"
                onChange={(e) => handleImageChange(e, "main")}
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>
            {project.images.main && (
              <img
                src={project.images.main}
                alt="Ana Resim"
                className="mt-2 w-full rounded-lg"
              />
            )}
          </div>
          <div>
            <label htmlFor="secondaryImage1" className="block text-sm font-medium">
              İkinci Resim
            </label>
            <div
              className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              onClick={() => document.getElementById("secondaryImage1").click()}
            >
              <FaUpload className="text-2xl mx-auto" /> 
              <input
                id="secondaryImage1"
                name="secondary1"
                type="file"
                onChange={(e) => handleImageChange(e, "secondary1")}
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>
            {project.images.secondary1 && (
              <img
                src={project.images.secondary1}
                alt="İkinci Resim"
                className="mt-2 w-full rounded-lg"
              />
            )}
          </div>
          <div>
            <label htmlFor="secondaryImage2" className="block text-sm font-medium">
              Üçüncü Resim
            </label>
            <div
              className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              onClick={() => document.getElementById("secondaryImage2").click()}
            >
              <FaUpload className="text-2xl mx-auto" /> 
              <input
                id="secondaryImage2"
                name="secondary2"
                type="file"
                onChange={(e) => handleImageChange(e, "secondary2")}
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>
            {project.images.secondary2 && (
              <img
                src={project.images.secondary2}
                alt="Üçüncü Resim"
                className="mt-2 w-full rounded-lg"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="previewLink" className="block text-sm font-medium">
            Proje Önizleme Linki
          </label>
          <input
            id="previewLink"
            name="previewLink"
            type="url"
            value={project.previewLink}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">
          Projeyi Kaydet
        </button>
      </div>
    </div>
  );
};

export default ProjectCardForm;
