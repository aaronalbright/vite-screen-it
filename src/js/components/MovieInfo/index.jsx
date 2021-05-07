import React, { useEffect, useState } from 'react';
import {v4 as uuid } from 'uuid';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';

import './MovieInfo.css';

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

export default function MovieInfo(props) {
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props.editFlag.flag == true) {
      setTitle(props.editFlag.movie.title)
      setCat(props.editFlag.movie.cat)
      setRating(props.editFlag.movie.rating)
    } else {
      setTitle('')
      setCat('')
      setRating(0)
    }
  }, [props.editFlag])

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
    if (props.editFlag.flag == false) {
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
      setTitle('')
      setCat('')
      setRating(0)
    } else {
      const movieEntry = {
        title,
        cat,
        rating,
        id: props.editFlag.movie.id
      };
      props.sendEntry(movieEntry, true);
    }
    
  };

  return (
    <div className={`movie-info ${props.editFlag.flag ? 'movie-info--edit' : ''}`}>
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
      <button className={`info__button ${props.editFlag.flag ? 'info__button--edit' : ''}`} onClick={hanldeButton}>
        {props.editFlag.flag ? "Update Movie" : "Add Movie"}
      </button>
    </div>
  );
}
