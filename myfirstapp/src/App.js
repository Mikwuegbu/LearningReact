import React, { useState, useEffect } from "react";
//import MovieCard from "./MovieCard";
import SearchIcon from "./Search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {


    // useEffect(() => {
    //     searchMovies("Batman");
    // }, []);

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();

    // };

    return (
        <div className="app">
            <h1>Netflix and Chill</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }} />
            </div>
        </div>
    );
};

export default App;