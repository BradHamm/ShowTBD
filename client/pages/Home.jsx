//homepage which will render popular tv shows from API, where users can choose to leave reviews. Also contains searchbar for fetching specific results.
//homepage which will render popular tv shows from API, where users can choose to leave reviews. Also contains searchbar for fetching specific results.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=977f0b8bb93b6b77c36f6cbeb9c655a3')
            .then(response => {
                setShows(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <input type="text" name="searchbar" id="searchbar" placeholder="Search for a show" />
            <ul>
                {shows.map(show => (
                    <li key={show.id}>{show.title}</li>
                ))}
            </ul>
        </>
    );
}


