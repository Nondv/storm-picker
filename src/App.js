import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './ui/Hero'

class App extends Component {
  state = {}

  componentDidMount() {
    axios.get('/heroes.json')
         .then(response => this.setState({ heroes: response.data }));
  }

  render() {
    const heroes = this.state.heroes || [];
    return (
      <div className="App">
        <div>
          {heroes.map(h => <Hero key={h.name} data={h} />)}
        </div>
      </div>
    );
  }
}

export default App;
