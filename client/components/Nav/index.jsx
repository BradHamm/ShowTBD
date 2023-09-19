// navbar handling navigation to different pages. (Change in styling to incidate which page the user is on?)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex justify-center items-center bg-navbar-blue text-offwhite py-8 drop-shadow-md">
      <div className="flex w-1/2 justify-between items-center lowercase font-montserrat">
        <Link to="/">
          <h1 className="font-outfit text-4xl text-white">ShowTracker</h1>
        </Link>
        <ul className="flex flex-wrap gap-20">
          <li>
            <Link to="/Profile" className={`hover:text-hoverwhite`}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/Login" className={`hover:text-hoverwhite`}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;