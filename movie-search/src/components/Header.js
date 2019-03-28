import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    {/*<span className="icn-logo"><i className="material-icons">code</i></span>*/}
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{background: 'tomato'}}>Home</NavLink></li>
      <li><NavLink to="/directors">Directors</NavLink></li>
      <li><NavLink to="/movies">Movies</NavLink></li>
    </ul>    
  </header>
);

export default Header;