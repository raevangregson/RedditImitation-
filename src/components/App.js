import React, { Component } from 'react';
import GridPosts from './GridPosts';
import ListPosts from './ListPosts';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className='links'>
          Reddit Aww
        <Link to='/listposts' className='links'>list view</Link>
        <Link to='/gridposts' className='links'>gridview</Link>
      </div>
        <Route path="/listposts" component={ListPosts}/>
        <Route path="/gridposts" component={GridPosts}/>
        <Redirect to="/listposts" component={ListPosts}/>
      </div>
        </Router>
    );
  }
}

export default App;
