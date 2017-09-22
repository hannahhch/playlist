import React from 'react';

//get information from API and render to page as its own div

const PlayListItem = ({ song }) => (
  <div className = 'single-card' key={song._id}>
    <h2>{song.songTitle}</h2>
    <h5>{song.songArtist}</h5>
    <p>Selected By: {song.userName}</p>
    <h4>"{song.songNotes}"</h4>
  </div>
);

export default PlayListItem;
