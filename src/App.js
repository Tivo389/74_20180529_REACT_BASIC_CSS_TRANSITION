import React, { Component } from 'react';
import './css/stylesheet.css';

class App extends Component {

  activateBtn = (e) => {
    e.currentTarget.classList.toggle('activated');
  };

  render() {
    return (
      <div className="App">
        <button className="hover">Hover</button>
        <button className="opacity" onClick={this.activateBtn}>Opacity</button>
        <button className="transform" onClick={this.activateBtn}>Transform</button>
        <button className="width" onClick={this.activateBtn}>Width</button>
      </div>
    );
  }
}

export default App;
