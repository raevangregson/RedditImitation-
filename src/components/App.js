import React, { Component } from 'react';
import React, {Component} from '';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts/>
      </div>
    );
  }
}

export default App;
