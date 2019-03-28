import React, { Component } from 'react';
{/*import { Route } from 'react-router-dom';
import Featured from './Featured';*/}

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h1>European Art Cinema</h1>
        <hr />
        <button id="getData">GET DATA</button>
        <p id="result"></p>
      </div>
    );
  }
}

export default Home;