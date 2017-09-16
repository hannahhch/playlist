import React, { Component } from 'react';

export default class PlayList extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }
  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
  render(){
    return(
      <div className = "card-holder">
        {this.state.songs.map(song =>(
          <div className = 'single-card'>
            <h2>{song.songTitle}</h2>
            <h5>{song.songArtist}</h5>
            <p>Selected By: {song.userName}</p>
            <p>{song.userName} loves this track because {song.songNotes}</p>
        </div>
        ))}
      </div>
    )
  }
};
