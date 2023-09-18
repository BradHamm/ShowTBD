//homepage which will render popular tv shows from API, where users can choose to leave reviews. Also contains searchbar for fetching specific results.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    let [shows, setShows] = useState([]);
    let [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=977f0b8bb93b6b77c36f6cbeb9c655a3')
            .then(response => {
                setShows(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchDataFromTMDb = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=977f0b8bb93b6b77c36f6cbeb9c655a3&query=${searchInput}`)
            console.log(response.data);
            console.log(searchInput);
            setSearchInput('');
            setShows(response.data.results);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    return (
        <>
            <div className="flex w-96 justify-between p-5">
                <input className='' type="text" name="searchbar" id="searchbar" value={searchInput} onChange={handleSearchInput} placeholder="Search for a show" />
                <button id="btnSearch" onClick={fetchDataFromTMDb} className='bg-cyan-600 hover:bg-cyan-800 w-16 h-10 text-white rounded-md'>Search</button>
            </div>
            <ul className='p-5'>
                {shows.map(show => (
                    <div key={show.id} className="flex mb-4 w-96 justify-between">
                        <li>{show.title}</li>
                        <Link to={`/ReviewForm`} state={{ title: `${show.title}`, id: `${show.id}`}}>
                        <button className=" cursor-pointer bg-cyan-600 hover:bg-cyan-800 w-8 h-8 rounded-full text-white">+</button>
                        </Link>
                    </div>
                ))}
            </ul>
        </>
    );
}



