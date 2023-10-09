import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  async function fetchMovieHandler() {
    try {
      const MovieData = await fetch("https://swapi.dev/api/films");

      const MoviesList = await MovieData.json();

      const transFormedData = MoviesList.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovieList(transFormedData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </React.Fragment>
  );
}

export default App;
