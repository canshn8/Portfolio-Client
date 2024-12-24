import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      message,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      if (response.status === 200) {
        setFullName("");
        setEmail("");
        setMessage("");
        alert("Mesajınız İletildi!")
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6023.075768692172!2d28.77318664855891!3d40.99159883541119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3c2cd88e3fb%3A0x2fd20d3c8896db4e!2zQ2VubmV0LCAzNDI5MCBLw7zDp8O8a8OnZWttZWNlL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1729535680149!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full md:mt-24 relative z-10 shadow-md ml-auto mr-24 ">
          <h2 className="text-gray-800 text-3xl font-extrabold">Contact</h2>
          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            Hi, if you have any questions or want to ask me anything contact me,
            just fill in the content fields and send.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-10 mt-8">
              <div className="grid grid-cols-2 gap-6">
                <label htmlFor="one">Full Name </label>
                <input
                  id="one"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="firstname lastname"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <label htmlFor="two">exam@gmail.com</label>
                <input
                  id="two"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
