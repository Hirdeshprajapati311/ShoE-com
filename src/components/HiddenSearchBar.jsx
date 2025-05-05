import React, { useState } from 'react';
import {FaSearch} from "react-icons/fa"

import '../Styles/searchBar.css'

const HiddenSearchBar = () => {

  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState('white')

  const handleClick = (e) => {
    setBgColor('#1a1a1a')

    if (e.target.className === 'container'){
      setShowInput(false);
      setBgColor('#fff');
    }
  }

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor , transition: "background-color 0.4s ease-in-out"}}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Enter your input" />
      ) : (
        <span>
          <FaSearch onClick={() => setShowInput(true)} />
        </span>
      )}
    </section>
  );
};

export default HiddenSearchBar;
