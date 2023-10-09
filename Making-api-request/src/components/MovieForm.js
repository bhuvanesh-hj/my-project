import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

const MovieForm = () => {
  const titleInputRef = useRef();
  const openingTextInputRef = useRef();
  const releaseDateInputRef = useRef();

  const addMovieHandler = (event) => {
    event.preventDefault();
    const NewMovie = {
      title: titleInputRef.current.value,
      openingText: openingTextInputRef.current.value,
      releaseDate: releaseDateInputRef.current.value,
    };
    console.log(NewMovie);
    titleInputRef.current.value = "";
    openingTextInputRef.current.value = "";
    releaseDateInputRef.current.value = "";
  };

  return (
    <form className={classes.control} onSubmit={addMovieHandler}>
      <label>Title</label>
      <input type="text" ref={titleInputRef} required />
      <br />
      <label>Opening Text</label>
      <textarea type="text" ref={openingTextInputRef} required/>
      <br />
      <label>Release Date</label>
      <input type="text" ref={releaseDateInputRef} required />
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
