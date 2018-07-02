import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return(
      <div className='tc'>
        <h1 className='tc'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={ filteredRobots } />
      </div>
    );
  }
}

export default App;

