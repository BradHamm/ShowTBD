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
    <div className="flex w-1/2 mt-10 gap-20">
      <div
        id="user-info"
        className="flex flex-col w-2/3 justify-center align-center gap-5"
      >
        <div id="username-container" className="flex text-2xl">
          <span>{username} - Active since 09/12/2023</span>
        </div>
        <div id="fav-genre" className="flex">
          <TopGenre genre={favgenre} />
        </div>
        <Link to="/ProfileConfig">
          <button className="rounded-full bg-indigo-500 w-auto self-start px-3 py-1">
            Edit Profile
          </button>
        </Link>
        <div id="reviews-list" className="flex flex-col mt-10">
          <span className="uppercase">My reviews</span>
          <hr className="w-2/3"></hr>
          <div className="mt-6">
            {reviews.length === 0 ? (
              <span>No reviews yet.</span>
            ) : (
              reviews.map((review, index) => (
                <UserReviews
                  key={index}
                  show={review.name}
                  body={review.body}
                  genre={review.genre}
                  streaming={review.streaming}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div
        id="top-five"
        className="flex flex-col w-1/3 justify-center align-center gap-10"
      >
        <div id="top-shows">
          <span>Favorite Shows</span>
          <hr></hr>
          <ul id="show-list">
            {favshows.map((show, index) => (
              <TopShows key={index} title={show} />
            ))}
          </ul>
        </div>
        <div id="top-actors">
          <span>Favorite Actors</span>
          <hr></hr>
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