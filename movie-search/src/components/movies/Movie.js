import React from 'react';

const Movie = (props) => (
  <li className="movie media group">
    <img className="movie-img" src={props.img} alt="movie" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Movie;