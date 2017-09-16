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
      artist: "",
      song: "",
      notes: ""
    }
  }
  handleUserNameChange(e){
    this.setState({userName: e.target.value});
  }

  handleArtistChange(e){
    this.setState({artist: e.target.value});
  }

  handleSongChange(e){
    this.setState({song: e.target.value});
  }

  handleNotesChange(e){
    this.setState({notes: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    alert("Thanks for your submission " + this.state.userName + "!");
  }

  render(){
    return (
      <form onSubmit ={this.handleSubmit}>
        <div className = "form-group">
          <input onChange={this.handleUserNameChange} name = "userName" type="text" value = {this.state.userName} placeholder="username: "/>
        </div>
        <div className = "form-group">
          <input onChange={this.handleArtistChange} name = "artist" type="text" value = {this.state.artist} placeholder="artist: "/>
        </div>
        <div className = "form-group">
          <input onChange={this.handleSongChange} name = "song" type="text" value = {this.state.song} placeholder="song: "/>
        </div>
        <div className = "form-group">
        <input onChange={this.handleNotesChange} name = "notes" type="text" value = {this.state.notes} placeholder="notes: "/>
      </div>
      <div className = "form-group">
        <input type="submit" class="btn btn-primary" value="Submit" />
      </div>
      </form>
    )
  }
}
