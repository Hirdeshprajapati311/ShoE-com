import React from 'react';
import '../Recommended/Recommended.css'
import Buttons from '../components/Buttons';

const Recommended = ({handleClick}) => {
  return (
    <>
      <section className="Recommended">
        <div>
          <h2 className="recommended-title">Recommended</h2>
          <div className="recommended-flex">
            <Buttons onClickHandler={handleClick} value="" title="All Products" />

            <Buttons
              onClickHandler={handleClick}
              value="Adidas"
              title="Adidas"
            />
            <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
            <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommended;
