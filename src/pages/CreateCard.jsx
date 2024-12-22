import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

const CreateCard = () => {
  const [project, setProject] = useState({
    title: "",
    tag: [],
    desc: "",
    explain: [],
    previewLink: "",
    images: {
      main: null,
      secondary1: null,
      secondary2: null,
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
    if (e.key === "Enter" && tagInput.trim() && project.tag.length < 5) {
      setProject({
        ...project,
        tag: [...project.tag, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg"];
      if (allowedTypes.includes(file.type)) {
        setProject((prev) => ({
          ...prev,
          images: { ...prev.images, [field]: file },
        }));
      } else {
        alert("Lütfen yalnızca PNG veya JPG formatında resim yükleyin.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("desc", project.desc);
    formData.append("previewLink", project.previewLink);
    formData.append("tag", JSON.stringify(project.tag)); // Tag'i JSON olarak gönderiyoruz
    formData.append("explain", JSON.stringify(project.explain)); // Explain'i JSON olarak gönderiyoruz
  
    // Görselleri ekle
    Object.keys(project.images).forEach((key) => {
      if (project.images[key]) {
        formData.append(key, project.images[key]);
      }
    });
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/project/addProject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200) {
        alert("Proje başarıyla kaydedildi!");
      }
    } catch (error) {
      console.error("Bir hata oluştu: ", error);
      alert("Proje kaydedilirken bir hata oluştu.");
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
            onChange={(e) =>
              setProject({ ...project, explain: e.target.value.split("\n") })
            }
            className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500"
            rows="4"
          />
          <div className="mt-2 text-xs text-gray-400">
            {project.explain.length === 0 && (
              <span>Her bir maddeyi yeni satıra yazın (örn. "İlk madde", "İkinci madde").</span>
            )}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          {["main", "secondary1", "secondary2"].map((field, index) => (
            <div key={index}>
              <label htmlFor={field} className="block text-sm font-medium">
                {field === "main" ? "Ana Resim" : `Ek Resim ${index}`}
              </label>
              <div
                className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                onClick={() => document.getElementById(field).click()}
              >
                <FaUpload className="text-2xl mx-auto" />
                <input
                  id={field}
                  type="file"
                  onChange={(e) => handleImageChange(e, field)}
                  className="hidden"
                  accept="image/png, image/jpeg"
                />
              </div>
              {project.images[field] && (
                <img
                  src={URL.createObjectURL(project.images[field])}
                  alt={field}
                  className="mt-2 w-full rounded-lg"
                />
              )}
            </div>
          ))}
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

        <button
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
          onClick={handleSubmit}
        >
          Projeyi Kaydet
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
