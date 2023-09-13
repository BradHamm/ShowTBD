// navbar handling navigation to different pages. (Change in styling to incidate which page the user is on?)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <ul className="flex flex-wrap gap-20 uppercase">
      <li>
        <Link 
          to="/"
          className={`hover:underline ${currentPage === '/' ? 'bg-black text-white py-1 px-2 rounded' : 'bg-none text-black py-1 px-2 rounded'}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/Profile"
          className={`hover:underline ${currentPage === '/Profile' ? 'bg-black text-white py-1 px-2 rounded' : 'bg-none text-black py-1 px-2 rounded'}`}
        >
          Profile
        </Link>
      </li>
      <li>
        <Link 
          to="/Login"
          className={`hover:underline ${currentPage === '/Login' ? 'bg-black text-white py-1 px-2 rounded' : 'bg-none text-black py-1 px-2 rounded'}`}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}

export default Nav;