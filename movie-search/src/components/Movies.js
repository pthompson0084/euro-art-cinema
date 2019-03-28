import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './movies/HTML';

const Movies = ({match}) => (
  <div className="main-content movies">
    <div className="movie-header group">
      <h2>Movies</h2> 
      <ul className="movie-nav">
        <li><NavLink to={`${match.url}/html`}>Movies</NavLink></li>
        {/*<li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>*/}
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
    <Route path={`${match.path}/html`} component={HTML} />
    {/*<Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />*/}
  </div>
);

export default Movies;