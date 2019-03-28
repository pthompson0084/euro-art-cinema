import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Directors from './Directors';
import Movies from  './Movies';
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={ () => <About title='About' /> } />
          <Route path="/directors" component={Directors} />
          <Route path="/movies" component={Movies} />
          <Route component={NotFound} />

        </Switch>
    </div>
  </BrowserRouter>
);

export default App;