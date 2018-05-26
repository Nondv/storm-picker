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
    return (
      <div className="App">
        <table className='app__hero-table'>
          <tbody>
            {
              this.rowsOfHeroes().map(
                (row, i) => <tr key={i}>
                              {row.map(h => <td key={h.name}><Hero data={h} /></td>)}
                            </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

  // TODO: cache it
  rowsOfHeroes() {
    const rowLength = 6;
    const heroes = this.state.heroes || [];
    const result = []

    let currentRow = [];
    for(let i = 0; i < heroes.length; i++) {
      currentRow.push(heroes[i]);
      if(currentRow.length === rowLength) {
        result.push(currentRow);
        currentRow = [];
      }
    }
    if(currentRow.length > 0) {
      result.push(currentRow);
    }

    return result
  }
}

export default App;
