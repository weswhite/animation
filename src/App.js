import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Fireworks from './fireworks/fireworks';
import Sphere from './sphere/sphere';
import FollowPath from './follow-path/follow-path';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">          
          <header>
            <Link to="/fireworks">
              <button>Fireworks</button>
            </Link>
            <Link to="/sphere">
              <button>Sphere</button>
            </Link>  
            <Link to="/follow-path">
              <button>Follow Path</button>
            </Link>
          </header>
          <div>
            <Route exact path="/" component={Fireworks} />
            <Route exact path="/fireworks" component={Fireworks} />
            <Route exact path="/sphere" component={Sphere} />
            <Route exact path="/follow-path" component={FollowPath} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
