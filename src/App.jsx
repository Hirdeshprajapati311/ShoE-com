import { useState } from "react";
import Nav from "./ecommerceweb/Navigation/Nav";
import Products from "./ecommerceweb/Products/Products";
import Recommended from "./ecommerceweb/Recommended/Recommended";
import Sidebar from "./ecommerceweb/Sidebar/Sidebar";
import Card from "./ecommerceweb/components/Card";

import datas from './ecommerceweb/db/data'



function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //Input filter
  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  const filterItems = datas.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio Filter
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  // Buttons Filter
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(datas, selected, query) {
    let filteredData = datas

    //Filtering input items
    if (query) {
      filteredData = filterItems
    }

    //Selelcted Filter
    if (selected) {
      filteredData =
        filteredData.filter(
          ({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected
        );
    }

    return filteredData.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice ={prevPrice}
      />
    ))

  }

  const result = filteredData(datas, selectedCategory, query)


  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange = {handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App


// <div className="accordion">
      //   {accordianData.map(({ title, content }) => (
      //     <Accordian title={title} content={content} />
      //   ))}
      // </div>