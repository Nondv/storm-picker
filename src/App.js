import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './ui/Hero'
import Feature from './entities/Feature'
import FeatureFilter from './ui/FeatureFilter'
import CounterPickFilter from './ui/CounterPickFilter';
import arrayToTable from './util/arrayToTable'
import sortBy from './util/sortBy'
import mapToObjects from './util/mapToObjects'
const mergeObjects = (a, b) => Object.assign({}, a, b)

class App extends Component {
  state = {
    filterSelection: {},
    filterCounterPickSelection: {},
    features: [],
    heroes: [],
    counterPicks: [],
    moreThen2FilterMode: false
  }

  componentDidMount() {
    axios.get('/features.json')
         .then(response => this.setState({ features: sortBy(mapToObjects(response.data, Feature), 'title') }));
    axios.get('/heroes.json')
         .then(response => this.setState({ heroes: sortBy(response.data, 'name') }));
    axios.get('/counter-pick.json')
         .then(response => this.setState({ counterPicks: sortBy(response.data, 'title') }));
  }

  updateFilters = (c) => {
    this.setState({ 
      filterSelection: mergeObjects(this.state.filterSelection, c)
    })
  }

  setCounterFilters = (filterCounterPickSelection) => {
    this.setState({
      // filterSelection: {},
      filterCounterPickSelection,
      moreThen2FilterMode: Object.keys(filterCounterPickSelection).length > 0
    });
  }

  render() {
    const {filterSelection, features, counterPicks} = this.state;
    const rows = this.rowsOfHeroes();
    return (
      <div className="app">
        <div className="title">
          What do we need to counter:
        </div>
        <CounterPickFilter cases={counterPicks} onChange={this.setCounterFilters} />
        <div className="title">
          Additional filters:
        </div>
        <FeatureFilter features={features || []}
                       selection={{}}
                       onChange={this.updateFilters} />
        <table className='app__hero-table'>
          <tbody>
            {
              rows.map(
                (row, i) => <tr key={i}>
                              {row.map(h => <td key={h.name}><Hero data={h} /></td>)}
                            </tr>
              )
            }
          </tbody>
        </table>
        {rows.length == 0 && (<div className="empty-message">There is no such hero. Try to make filter strict less.</div>)}
      </div>
    );
  }

  // TODO: cache it
  rowsOfHeroes() {
    const rowLength = 6;
    const heroes = this.filteredHeroes();
    return arrayToTable(heroes, rowLength);
  }

  filteredHeroes() {
    const { filterSelection, filterCounterPickSelection, moreThen2FilterMode } = this.state;
    const heroes = this.state.heroes || [];
    if(!this.isFilterEnabled()) {
      return heroes;
    }
 
    const requiredFeatures = Object.entries(filterSelection)
                                   .filter(keyvalue => keyvalue[1])
                                   .map(keyvalue => keyvalue[0]);
    const requiredCounterPickFeatures = Object.entries(filterCounterPickSelection)
                                   .filter(keyvalue => keyvalue[1])
                                   .map(keyvalue => keyvalue[0]);                                   
    const heroFilter = h =>  {
     
      if (!moreThen2FilterMode) {
        return !requiredFeatures.find(f => !h.features[f]);
      }

      const rfH = requiredCounterPickFeatures.filter(f => h.features[f]);
      return rfH.length >= 3 && (requiredFeatures.length == 0 || !requiredFeatures.find(f => !h.features[f]));
    }
    return heroes.filter(heroFilter);
  }

  isFilterEnabled() {
    return -1 !== Object.values(this.state.filterSelection).indexOf(true) || -1 !== Object.values(this.state.filterCounterPickSelection).indexOf(true);
  }
}

export default App;
