import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Feature = function({data, selected, onChange}) {
  return (
    <div className='feature-filter__feature'>
      <input type="checkbox" checked={selected} onChange={e => onChange(e.target.checked)} />
      <span>{data.title}</span>
    </div>
  )
}

const FeatureFilter = function({features, selection, onChange}) {
  const setSelection = (feature, value) => onChange({ [feature.id]: value });
  return (
    <div className='feature-filter'>
      {features.map(f => <Feature key={f.id} data={f} selected={selection[f.id]} onChange={v => setSelection(f, v)} />)}
    </div>
  )
}

FeatureFilter.propTypes = {
  features: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired, // hash feature => bool
  onChange: PropTypes.func.isRequired // `f(change)` where `change` is a object to merge `selection` with
};

export default FeatureFilter;
