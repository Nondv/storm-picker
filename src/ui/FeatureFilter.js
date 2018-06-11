import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './FeatureFilter.css';

const Feature = function({data, selected, onChange}) {
  return (
    <div className='feature-filter__feature'>
      <label>
        <input type="checkbox" checked={selected} onChange={e => onChange(e.target.checked)} />
        {data.title}
      </label>
    </div>
  )
}

const FeatureFilter = function({features, selection, onChange}) {
  const setSelection = (feature, value) => onChange({ [feature.id]: value });
  const renderFeature = f => <Feature data={f} selected={selection[f.id]} onChange={v => setSelection(f, v)} />;

  return (
    <div className='row feature-filter'>
      {features.map(f => <div key={f.id} className='large-2 medium-4 small-6'>{renderFeature(f)}</div>)}
    </div>
  )
}

FeatureFilter.propTypes = {
  features: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired, // hash feature => bool
  onChange: PropTypes.func.isRequired // `f(change)` where `change` is a object to merge `selection` with
};

export default FeatureFilter;
