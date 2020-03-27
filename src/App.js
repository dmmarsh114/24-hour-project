import React from 'react';
import './App.css';

import GetLocation from './components/GetLocation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>this is team 6's incredible app that was made in 24 hours!</h1>
        <GetLocation />
      </div>
    );
  }
}

export default App;