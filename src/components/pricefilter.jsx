import React from 'react';

const PriceFilter = ({ sortOption, onFilterChange }) => {
  const handleSortOptionChange = (event) => {
    const newSortOption = event.target.value;
    onFilterChange({ sortOption: newSortOption });
  };

  return (
    <div className='container'>
      <label htmlFor="sortOption" className='text-white'>Sort By:</label>
      <select id="sortOption" value={sortOption} onChange={handleSortOptionChange} className='form-select'>
        <option value="">None</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High To Low</option>
      </select>
    </div>
  );
};

export default PriceFilter;
