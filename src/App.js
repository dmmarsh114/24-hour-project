import React from 'react';
import './App.css';

import GetLocation from './components/GetLocation';

let style = {
  textAlign: 'center'
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={style}>
          <h1>This incredible app was made by Team "Merge 6"!</h1>
          <h2>And in less than 24 hours, no less!</h2>
          <h6>barely...</h6>
        </div>
        <GetLocation />
      </div>
    );
  }
}

export default App;