import React, { useState } from 'react';
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

  const addNewMovie = newMovie => {
    setMovies([newMovie, ...movies]);
  };
  
  // Removies movie by uuid
  const handleRemove = id => {
    setMovies(movies.filter(d => d.id !== id));
  };

  return (
    <>
      <MovieInfo sendEntry={d => addNewMovie(d)} />
      <MovieList movies={movies} onRemove={handleRemove} />
    </>
  );
}

export default App;