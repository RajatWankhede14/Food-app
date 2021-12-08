import React, { useState } from "react";
import "../styles/Product.css";

function FiltersSection({ handleFilters, categories, title }) {
  const [checked, setChecked] = useState([]);

  function handleChange(event) {
    let newChecked = [...checked];
    if (newChecked.indexOf(event.target.name) === -1) {
      newChecked.push(event.target.name);
    } else {
      let index = newChecked.indexOf(event.target.name);
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
    handleFilters(newChecked);
  }
  return (
    <div>
      <div className="filters">
        <form>
          <h2>{title}</h2>
          {categories.map((category, index) => (
            <span key={index}>
              <input
                type="checkbox"
                name={category.name}
                id={category.name}
                onChange={handleChange}
              />
              <label htmlFor={category.name}>{category.name}</label>
            </span>
          ))}
        </form>
      </div>
    </div>
  );
}

export default FiltersSection;
