import React from 'react';
import PropTypes from 'prop-types'; // ES6
import arrayToTable from '../util/arrayToTable';

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
  const rows = arrayToTable(features, 6);
  const renderFeature = f => <Feature data={f} selected={selection[f.id]} onChange={v => setSelection(f, v)} />;

  return (
    <table className='feature-filter'>
      <tbody>
        {rows.map((r, i) => <tr key={i}>{r.map(f => <td key={f.id}>{renderFeature(f)}</td>)}</tr>)}
      </tbody>
    </table>
  )
}

FeatureFilter.propTypes = {
  features: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired, // hash feature => bool
  onChange: PropTypes.func.isRequired // `f(change)` where `change` is a object to merge `selection` with
};

export default FeatureFilter;
