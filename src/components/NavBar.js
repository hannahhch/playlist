import React, { Component } from 'react';

export default class NavBar extends Component {
  render(){
    return (
      <div className = "nav-bar">
        <div className = "nav-bar-components">
          <div className = "left-nav-items">
            <h2>PROGRESSION</h2>
            <h6>Live Playlist Creation - Share the Love!</h6>
          </div>
          <div className = "right-nav-items">
            <img src = "cd_icon.png" alt ="cd icon" className = "cd-icon"/>
          </div>
        </div>
      </div>
    );
  }
}
