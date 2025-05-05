import React from 'react';
import '../Colors/Colors.css'
import Input from '../../components/Input';

const Colors = ({handleChange}) => {
  return (
    <section className="ml1">
      <h2 className="color-title">Colors</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label htmlFor="" className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />
        <span
          style={{ background: "white", border: "2px solid black", }}
          name="test1"
          className="checkmark"
        ></span>
        White
      </label>
    </section>
  );
}

export default Colors;
