import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, registerStart } from '../redux/userSlice'; 

const Account = () => {

  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 

  const handleClick = (e) => {
    e.preventDefault(); 
    const userData = { email, password, username: isLogin ? undefined : username };
    console.log(userData);
    console.log(isLogin);
    
    if (isLogin) {
        dispatch(loginStart(userData));
    } else {
        dispatch(registerStart(userData));
    }
 };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="border-gray-200 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleClick}>
          {!isLogin && (
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
          )}
          <div className="mb-4">
            <label className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
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

export default Account;
