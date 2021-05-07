import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';

const categories = [
  'Action/Adventure',
  'Comedy',
  'Horror',
  'Thriller',
  'Romance',
  'Historical',
  'Drama',
  'Sci-Fi',
  'Western',
  'Crime',
  'Documentary',
];

export default function MovieList(props) {
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('');
  const [rating, setRating] = useState(0);

  const createOptions = () =>
    categories.map((d, i) => {
      return (
        <option key={`cat--${i}`} value={d}>
          {d}
        </option>
      );
    });

  const handleStarClick = e => {
    if (e.target.dataset.filled == 'false') {
      setRating(e.target.dataset.key);
    } else {
      setRating(e.target.dataset.key);
    }
  };

  const hanldeButton = () => {
    if (title == '' || cat == "" || rating == 0) {
      alert("Please completely fill in the movie information")
      return
    }
    const movieEntry = {
      title,
      cat,
      rating,
      id: uuid()
    };
    props.sendEntry(movieEntry);
  };

  return (
    <div className="movie-info">
      <div className="info__title">
        <label htmlFor="movieTitle">Name</label>
        <input
          id="movieTitle"
          name="title"
          type="text"
          value={title}
          placeholder="Title of the movie"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="info__cat">
        <label htmlFor="movieCat">Category</label>
        <select
            className={cat == '' ? 'select select--none' : 'select'}
          id="movieCat"
          name="cat"
          value={cat}
          onChange={e => setCat(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {createOptions()}
        </select>
      </div>
      <div className="info__rating">
        <label htmlFor="movieRating">Rating</label>
        <div className="rating__stars">
          {[...Array(5).keys()].map(d => {
            if (d < rating) {
              return (
                <img
                  className="rating__star star--filled"
                  key={`star--${d}`}
                  data-filled={true}
                  data-key={d + 1}
                  src={starFilled}
                  alt="filled star"
                  onClick={handleStarClick}
                />
              );
            } else {
              return (
                <img
                  className="rating__star"
                  key={`star--${d}`}
                  data-filled={false}
                  data-key={d + 1}
                  src={star}
                  alt="empty star"
                  onClick={handleStarClick}
                />
              );
            }
          })}
        </div>
      </div>
      <button className="info__button" onClick={hanldeButton}>Add Movie</button>
    </div>
  );
}
