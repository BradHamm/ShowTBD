import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER, CREATE_USER } from '../public/utils/mutations';

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  console.log('Before mutations')
  const [loginUser] = useMutation(LOGIN_USER);
  const [createUser] = useMutation(CREATE_USER);


  console.log('After mutations.')
  const handleLogin = async () => {
    try {
      const { data } = await loginUser({
        variables: {
          username,
          password,
        },
      });

      const token = data.login.token;

      localStorage.setItem('token', token);

      navigate('/Home')
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const { data } = await createUser({
        variables: {
          username,
          password,
          email,
        },
      });

      const token = data.createUser.token;

      localStorage.setItem('token', token);

      navigate('/Profile')
    } catch (error) {
      console.error('User creation failed', error);
    }
  console.log('EOF')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div> 
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {/* Login */}
        </form>
  
        {/* New User */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">New User</h2>
        <form className="mt-8 space-y-6" onSubmit={handleCreateUser}>
          {/* New user input */}
          <div>
            <label htmlFor="new-username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="new-username"
              name="username"
              type="text"
              autoComplete="new-username"
              required
              value={newUser.username}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="new-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={newUser.password}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="new-email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="new-email"
              name="email"
              type="email"
              autoComplete="new-email"
              required
              value={newUser.email}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="favoriteGenre" className="block text-sm font-medium text-gray-700">
              Favorite Genre
            </label>
            <input
              id="favoriteGenre"
              name="favoriteGenre"
              type="text"
              autoComplete="favoriteGenre"
              required
              value={newUser.favoriteGenre}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="favoriteShows" className="block text-sm font-medium text-gray-700">
              Favorite Shows
            </label>
            <input
              id="favoriteShows"
              name="favoriteShows"
              type="text"
              autoComplete="favoriteShows"
              required
              value={newUser.favoriteShows.join(', ')}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="favoriteCelebrities" className="block text-sm font-medium text-gray-700">
              Favorite Celebrities
            </label>
            <input
              id="favoriteCelebrities"
              name="favoriteCelebrities"
              type="text"
              autoComplete="favoriteCelebrities"
              required
              value={newUser.favoriteCelebrities.join(', ')}
              onChange={handleNewUserChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}