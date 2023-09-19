// webpage for the user's profile, displaying all top 5 and top genre info

import React from 'react';
import { Link, UNSAFE_LocationContext } from 'react-router-dom';

import UserReviews from '../components/Profile/UserReviews';
import TopShows from '../components/Profile/TopShows';
import TopCelebs from '../components/Profile/TopCelebs';
import TopGenre from '../components/Profile/TopGenre';

function Profile() {

  const username = "irene";
  const favgenre = "Drama";
  const reviews = [];
  const favshows = [
    "Show",
    "Show",
    "Show",
    "Show",
    "Show"
  ];
  const favceleb = [
    "Actor",
    "Actor",
    "Actor",
    "Actor",
    "Actor",
  ]

  return (
    <div className="flex w-1/2">
      <div
        id="user-info"
        className="flex flex-col border-2 w-2/3 justify-center align-center"
      >
        <div id="username-container" className="flex">
          <span>{username} - Active since 09/12/2023</span>
        </div>
        <div id="fav-genre" className="flex">
          <TopGenre genre={favgenre}/>
        </div>
        <Link to="/ProfileConfig">
          <button className="rounded-full bg-indigo-500 w-auto self-start px-3 py-1">Edit Profile</button>
        </Link>
        <div id="reviews-list" className="flex flex-col">
          {reviews.map((review, index) => (
            <UserReviews
              key={index}
              show={review.show}
              body={review.body}
              genre={review.genre}
              streaming={review.streaming}
            />
          ))}
        </div>
      </div>
      <div
        id="top-five"
        className="flex flex-col border-2 w-1/3 justify-center align-center"
      >
        <div id="top-shows" className="border-2">
          <span>Favorite Shows</span>
          <ul id="show-list">
            {favshows.map((show, index) => (
              <TopShows key={index} title={show} />
            ))}
          </ul>
        </div>
        <div id="top-actors" className="border-2">
          <span>Favorite Actors</span>
          <ul id="actor-list">
            {favceleb.map((actor, index) => (
              <TopCelebs key={index} name={actor} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;