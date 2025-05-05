import React from 'react'
import { useEffect, useState } from 'react'
import '../Styles/mealStyles.css'
import axios from "axios";

const Meals = () => {


  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
      // console.log(res.data.meals)
      setItems(res.data.meals);
    }).catch((err) => {
      console.error(err);
    })

  }, []);
  
  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section>
        <img className='img' src={strMealThumb} alt={strMeal} />
        <span>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </span>
      </section>
    )
  })
  
  

  return (
    <div className='items-container'>
      {itemsList}
    </div>
  )
}

export default Meals
