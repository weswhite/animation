import React, { Component } from 'react';
import './App.css';
import Fireworks from './fireworks/fireworks';
import Sphere from './sphere/sphere';
import FollowPath from './follow-path/follow-path';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fireworks></Fireworks>
      </div>
    );
  }
}

export default App;
