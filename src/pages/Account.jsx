import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../redux/apiCalls'; 
import { useNavigate } from 'react-router-dom';
import withGuest  from "../HOC/withGuest";

const Account = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const [isLogin, setIsLogin] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const userData = isLogin
      ? { username, password } 
      : { email, username, password };

    try {
      if (isLogin) {
        dispatch(login(userData));
      } else {
        dispatch(register(userData));
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
    console.log(user);
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="border-gray-200 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form>
          {!isLogin && (
            <div className="mb-4">
            <label className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required={!isLogin} 
            />
          </div>
           
          )}
           <div className="mb-4">
              <label className="block text-gray-200 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                required={!isLogin} 
              />
            </div>
          <div className="mb-6">
            <label className="block text-gray-200 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={() => setIsLogin(!isLogin)} 
            className="text-indigo-400 hover:underline ml-2"
          >
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default withGuest(Account);
