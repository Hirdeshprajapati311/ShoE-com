import React from 'react';
import '../Category/Category.css'

const Category = ({handleChange}) => {
  return (
    <section>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <span className="checkmark"></span>
          Sneakers
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <span className="checkmark"></span>
          Flats
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <span className="checkmark"></span>
          Sandals
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
          <span className="checkmark"></span>
          Heels
        </label>
      </div>
    </section>
  );
}

export default Category;
