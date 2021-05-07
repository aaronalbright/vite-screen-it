import React, { useState, useEffect } from 'react';
import movieData from '../../../data/movies.json';
import { v4 as uuid } from 'uuid';

import MovieInfo from '../MovieInfo';
import MovieList from '../MovieList';

import './App.css';

// Ensures all current movies have UUID
for (const movie of movieData) {
  if (!('id' in movie)) movie.id = uuid();
}

function App() {
  const [movies, setMovies] = useState(movieData);
  const [editFlag, setEditFlag] = useState({flag: false, movie: {}});


  const addNewMovie = (newMovie, isEdit = false) => {
    if (isEdit) {
      setMovies(movies.map(d => d.id == newMovie.id ? newMovie : d));
      setEditFlag({flag: false, movie: {}})
    } else {
      console.log("Edit is false");
      setMovies([newMovie, ...movies]);
    }
  };
  
  // Removies movie by uuid
  const handleRemove = id => {
    setMovies(movies.filter(d => d.id !== id));
  };

  const handleEdit = (bool, movie) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setEditFlag({flag: bool, movie});
  }

  return (
    <>
      <MovieInfo editFlag={editFlag} sendEntry={addNewMovie} />
      <MovieList movies={movies} onRemove={handleRemove} onEdit={handleEdit}/>
    </>
  );
}

export default App;