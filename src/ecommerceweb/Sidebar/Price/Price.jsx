import React from 'react';
import '../Price/Price.css'
import Input from '../../components/Input';

const Price = ({handleChange}) => {
  return (
    <section className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="0$-50$"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="50$-100$"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="100$-150$"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="150$-200$"
        name="test2"
      />
    </section>
  );
}

export default Price;
