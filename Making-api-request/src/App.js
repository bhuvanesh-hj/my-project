import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [errorHandler, setErrorHandler] = useState(null);
  const [retry, setRetry] = useState(false);

  async function fetchMovieHandler() {
    setIsloading(true);
    setErrorHandler(null);
    try {
      const MovieData = await fetch("https://swapi.dev/api/films");

      if (!MovieData.ok) {
        setRetry(true);
        throw new Error("Something went wrong....Retrying");
      }

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
      setRetry(false);
    } catch (error) {
      setErrorHandler(error.message);
    }
    setIsloading(false);
  }

  useEffect(() => {
    let timer;
    if (retry) {
      timer = setInterval(fetchMovieHandler, 5000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [retry]);

  const cancelRetry = () => {
    setRetry(false);
    setErrorHandler("Canceled");
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movieList} />}
        {!isLoading && errorHandler && (
          <p>
            {errorHandler}
            {"  "}
            <button onClick={cancelRetry}>Cancle</button>
          </p>
        )}
        {isLoading && <i>Loading....</i>}
      </section>
    </React.Fragment>
  );
}

export default App;
