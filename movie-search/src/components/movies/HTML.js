import React from 'react';
import Movie from './Movie';
import { HTMLCourses } from '../../data/movies';

const HTML = (props) => {
  let movies = HTMLCourses.map((movie) => {
    return <Movie title={movie.title}
                   desc={movie.description}
                   img={movie.img_src}
                   key={movie.id} />
  }); 
  return (
    <div>
      <ul>
        {movies}    
      </ul>
    </div>
  );
}

export default HTML;