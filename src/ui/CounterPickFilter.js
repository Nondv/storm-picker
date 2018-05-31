import React from 'react';
import PropTypes from 'prop-types'; // ES6

const CaseItem = ({ id, title, description = '', onClick = () => {}, features = [], selected = false }) => (
  <div className={`counter-pick-filter__case-item ${selected? 'selected': ''}`} onClick={onClick} >
    <div className="title" title={description} >
      {title||id}
    </div>

    <div className="counter-pick-filter__case-item_details">
      {description}
      <hr/>
      Requires at least 3 of this:
      <ul>
        {features.map( (f, index) => <li key={index}>{f} </li>)}
      </ul>
    </div>
     
  </div>
);

class CounterPickFilter extends React.Component {

  state = {
    selectedItem: null,
  }

  selectItem = (selectedItem) => {
    if (this.state.selectedItem === selectedItem) { // deselect
      return this.disableFilter();
    }
    this.setState({
      selectedItem
    });
    const filtersMap = {};
    selectedItem.features.forEach(feature => {
      filtersMap[feature] = true;
    });
    this.props.onChange(filtersMap);
  }

  disableFilter = () => {
    this.setState({
      selectedItem: null
    });
    this.props.onChange({});
  }

  render() {
    return(
      <div className="counter-pick-filter">
        {
          this.props.cases.map(item => <CaseItem key={item.id} {...item} selected={item === this.state.selectedItem} onClick={() => this.selectItem(item)} />)
        }
      </div>
    );
  }
}

CounterPickFilter.propTypes = {
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  onChange: PropTypes.func.isRequired
};

export default CounterPickFilter;
