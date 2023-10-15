import React, { useCallback, useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MoviesList";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [errorHandler, setErrorHandler] = useState(null);
  const [retry, setRetry] = useState(false);

  const fetchMovieHandler = useCallback(async function() {
    setIsloading(true);
    setErrorHandler(null);
    try {
      const MovieData = await fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/movies.json"
      );

      if (!MovieData.ok) {
        setRetry(true);
        throw new Error("Something went wrong....Retrying");
      }

      const MoviesList = await MovieData.json();

      const loadedMovieList = [];

      for (let key in MoviesList) {
        loadedMovieList.push({
          id: key,
          title: MoviesList[key].title,
          openingText: MoviesList[key].openingText,
          releaseDate: MoviesList[key].releaseDate,
        });
      }
      setMovieList(loadedMovieList);
      setRetry(false);
    } catch (error) {
      setErrorHandler(error.message);
    }
    setIsloading(false);
  }, []);

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

  const addNewMovieHandler = async (newMovie) => {
    const response = await fetch(
      "https://react-http-91704-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    fetchMovieHandler();
    // console.log(data);
  };

  const deleteMovieHandler = async (movieId) => {
    const response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/movies/${movieId}.json`,
      {
        method: "DELETE",
      }
    );
    fetchMovieHandler();
  };

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>
        <MovieForm addMovie={addNewMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && (
          <MoviesList movies={movieList} deleteMovie={deleteMovieHandler} />
        )}
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
