import React, { useState } from 'react';
import '../Styles/testimonials.css'

const Testimonials = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "John Doe",
    },
    {
      quote: "I'm so impressed with the quality of this product!",
      author: "Jane Doe",
    },
    {
      quote: "I've never seen anything like this before!",
      author: "Bob Smith",
    },
    {
      quote: "This product has changed my life!",
      author: "Alice Johnson",
    },
    {
      quote: "I'm so glad I bought this product!",
      author: "Mike Brown",
    },
    {
      quote: "This product is amazing!",
      author: "Emily Davis",
    },
    {
      quote: "I've never seen anything like this before!",
      author: "Kevin White",
    },
    {
      quote: "This product has exceeded my expectations!",
      author: "Sarah Lee",
    },
    {
      quote: "I'm so impressed with the customer service!",
      author: "David Kim",
    }
  ]

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1)%testimonials.length)
  }


  return (
    <div className='testimonials'> 
      <div className='testimonials-quote'>
        {
          testimonials[currentIndex].quote
        }

        <div className='testimonials-author'>
          -{
            testimonials[currentIndex].author
          }
        </div>

        <div className='testimonials-nav'>
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
