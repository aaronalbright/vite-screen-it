import React from 'react';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';

export default function MovieList({movies, onRemove}) {

  const fillStars = (num) => {
      return [...Array(5).keys()].map(d => {
        if (d < num) {
            return (<img className="rating__star star--filled" key={`star--${d}`} src={starFilled} alt="filled star"/>)
        } else {
            return (<img className="rating__star" key={`star--${d}`} src={star} alt="empty star"/>)
        }
      })
  }

  return (
    <div className="movies-list">
      {movies.map((d,i) => {    
        return <div className="movies-list__item" index={i} key={`movie--${i}`}>
            <div className="item__icon">{d.title !== '' ? d.title.match(/\b(\w)/g).join('').toUpperCase().slice(0,4) : ''}</div>
            <div className="item__title">
                {d.title}
            </div>
            <div className="item__cat">{d.cat}</div>
            <div className="item__rating">
                {fillStars(d.rating)}
                </div>
              <div className="item__delete"><button onClick={() => onRemove(d.id)}>Remove</button></div>
            </div>;
      })}
    </div>
  );
}
