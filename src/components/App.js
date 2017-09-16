import React, { Component } from 'react';
import '../styles/index.css';
import NavBar from '../components/NavBar.js';
import PlayListForm from '../components/PlayListForm.js';
import PlayList from '../components/PlayList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
