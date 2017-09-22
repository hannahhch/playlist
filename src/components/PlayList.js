import React, { Component } from 'react';
import PlayListItem from '../components/PlayListItem.js';

export default class PlayList extends Component {
  constructor(props){
    super(props);
    // sets state to empty array //
    this.state = {
      songs: []
    }
  }

  //get the data from api and then sets song state to the data
  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
//on submit, fetch new data
//map over the songs and store the playlist items 
  render(){
    return(
      <div className = "card-holder">
        <form onSubmit ={this.fetchData} className = "update-btn">
          <input type = "submit" className ="btn btn-primary" value="Update Playlist"/>
        </form>
        {this.state.songs.map(song => <PlayListItem song={ song } key={ song._id }/>)}
      </div>
    )
  }
};
