// reviews left by the user, linked to their profile.
import React from 'react';

function UserReviews({ show, body, genre, streaming }) {
  return (
    <>
      <span className="text-2xl">{show}</span>
      <p>{body}</p>
      <div className="flex justify-between">
        <span>Genre: {genre}</span>
        <span>Streaming: {streaming}</span>
      </div>
    </>
  );
}

export default UserReviews;