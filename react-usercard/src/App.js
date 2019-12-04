import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import InputForm from './InputForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followerlist: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/dustinmyers')
      .then( response => {
        this.setState(response.data);
    })
    .catch( err => {
      console.log(err);
    })
    axios.get('https://api.github.com/users/dustinmyers/followers')
      .then( response => {
        const data = response.data;
        this.setState({followerlist: data});
    })
    .catch( err => {
      console.log(err);
    })
  }
  setUser = item => {
    axios.get(`https://api.github.com/users/${item}`)
      .then( response => {
        this.setState(response.data);
    })
    .catch( err => {
      console.log(err);
    })
    axios.get(`https://api.github.com/users/${item}/followers`)
      .then( response => {
        const data = response.data;
        this.setState({followerlist: data});
    })
    .catch( err => {
      console.log(err);
    })
  }
  render() {
    return (
      <>
      <InputForm setUser={this.setUser}/>
      <Card
      avatar={this.state.avatar_url}
      name={this.state.name}
      username={this.state.username}
      bio={this.state.bio}
      url={this.state.html_url}
      location={this.state.location}
      followers={this.state.followers}
      followerlist={this.state.followerlist}
      />
      </>
    );
  }
}

export default App;
