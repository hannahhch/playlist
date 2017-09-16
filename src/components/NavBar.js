import React, { Component } from 'react';

export default class NavBar extends Component {
  render(){
    return (
      <div className = "nav-bar">
        <div className = "nav-bar-components">
          <div className = "left-nav-items">
            <h2>PROGRESSION</h2>
            <h3>Live Playlist Creation</h3>
          </div>
          <div className = "right-nav-items">
            <p>Icon Here</p>
          </div>
        </div>
      </div>
    );
  }
}
