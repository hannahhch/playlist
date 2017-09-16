import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props){
    super(props);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }
  handleUserNameChange(e){
    this.setState({userName: e.target.value});
  }

  handleArtistChange(e){
    this.setState({songArtist: e.target.value});
  }

  handleSongChange(e){
    this.setState({songTitle: e.target.value});
  }

  handleNotesChange(e){
    this.setState({songNotes: e.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

render(){
  return (
    <div>
    <form onSubmit ={this.handleSubmit}>
      <div className = "form-group">
        <input onChange={this.handleUserNameChange} className = "form-control" name = "userName" type="text" value = {this.state.userName} required placeholder="username: "/>
      </div>
      <div className = "form-group">
        <input onChange={this.handleArtistChange} className = "form-control" name = "artist" type="text" value = {this.state.songArtist} required placeholder="artist: "/>
      </div>
      <div className = "form-group">
        <input onChange={this.handleSongChange} className = "form-control" name = "song" type="text" value = {this.state.songTitle} required placeholder="song: "/>
      </div>
      <div className = "form-group">
        <input onChange={this.handleNotesChange} className = "form-control" name = "notes" type="text" value = {this.state.songNotes} required placeholder="I love this song because... "/>
      </div>
      <div className = "form-group">
        <input type="submit" className ="btn btn-primary" value="Add to Playlist" />
      </div>
    </form>
    <hr/>
  </div>
  )
}
}
