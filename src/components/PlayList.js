import React, { Component } from 'react';
import PlayListItem from '../components/PlayListItem.js';

export default class PlayList extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }

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
