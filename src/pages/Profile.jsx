import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const username = useSelector(state => state.user.currentUser.username);
  const email = useSelector(state => state.user.currentUser.email);
  const password = useSelector(state => state.user.currentUser.password);
  const createdAt = useSelector(state => state.user.currentUser.createdAt);
  const updatedAt = useSelector(state => state.user.currentUser.updatedAt);

  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Username:', updatedUsername);
    console.log('Updated Email:', updatedEmail);
    console.log('Updated Email:', password);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="col-span-1">
          <div className="dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img src="" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="Profile" />
              <h1 className="text-xl text-white font-bold">{username}</h1>
              <p className="text-gray-400">{email}</p>
            </div>
          </div>
        </div>

        
        <div className="col-span-2">
  <div className="dark:bg-gray-800 shadow-lg rounded-lg p-8">
    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-2">
      <span className="inline-block bg-blue-500 text-white p-2 rounded-full">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </span>
      Profil Bilgilerini Güncelle
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div className="flex flex-col">
        <label className="text-gray-300 mb-2">Kullanıcı Adı</label>
        <input
          type="text"
          value={updatedUsername}
          onChange={(e) => setUpdatedUsername(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Kullanıcı adınızı girin"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Email adresinizi girin"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-300 mb-2">Parola</label>
        <input
          type="password"
          value={updatedPassword}
          onChange={(e) => setUpdatedPassword(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Parolanızı girin"
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
        >
          Vazgeç
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition duration-300"
        >
          Güncelle
        </button>
      </div>

    </form>
  </div>
</div>

      </div>
    </div>
  );
};

export default Profile;
