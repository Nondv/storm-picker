import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './ui/Hero'
import Feature from './entities/Feature'
import FeatureFilter from './ui/FeatureFilter'

class App extends Component {
  state = {
    filterSelection: {}
  }

  componentDidMount() {
    axios.get('/features.json')
         .then(response => this.setState({ features: response.data.map(f => new Feature(f)) }));
    axios.get('/heroes.json')
         .then(response => this.setState({ heroes: response.data }));
  }

  render() {
    const {filterSelection, features} = this.state;
    const mergeObjects = (a, b) => Object.assign({}, a, b)

    return (
      <div className="App">
        <FeatureFilter features={features || []}
                       selection={{}}
                       onChange={c => this.setState({ filterSelection: mergeObjects(filterSelection, c) })} />
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
    const heroes = this.filteredHeroes();
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

  filteredHeroes() {
    const {filterSelection} = this.state;
    const heroes = this.state.heroes || [];
    if(!this.isFilterEnabled()) {
      return heroes;
    }

    const requiredFeatures = Object.entries(filterSelection)
                                   .filter(keyvalue => keyvalue[1])
                                   .map(keyvalue => keyvalue[0]);

    const heroFilter = h => !requiredFeatures.find(f => !h.features[f]);
    return heroes.filter(heroFilter);
  }

  isFilterEnabled() {
    return -1 !== Object.values(this.state.filterSelection).indexOf(true);
  }
}

export default App;
