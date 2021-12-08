import React, { useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import ServicesNav from "../Components/ServicesNav";
import BottomNavBar from "../Components/BottomNavBar";
import FiltersSection from "../Components/FiltersSection";
import "../styles/App.css";
import { data, meals, areas, ingredients } from "../static/data";
import Product from "../Components/Product";

function HomeScreen() {
  const [recipes, setRecipes] = useState(data);
  const [category, setCategory] = useState(null);
  const [area, setArea] = useState(null);
  const [ingredient, setIngredient] = useState(null);

  const handleFilters = (filters, category) => {
    switch (category) {
      case "meals":
        setCategory(filters);
        break;
      case "area":
        setArea(filters);
        break;
      case "ingredient":
        setIngredient(filters);
        break;
      default:
        break;
    }
  };

  const submitFilters = (event) => {
    let final = [];
    if (category.length > 1) {
      var arr = category.map((c) =>
        recipes.filter((recipe) => recipe.category === c)
      );
      for (var i of arr) {
        for (var j of i) {
          final.push(j);
        }
      }
      // setRecipes(final);
    } else {
      final = recipes.filter((recipe) => recipe.category === category[0]);
      // setRecipes(final);
    }

    if (area.length > 1) {
      var a = area.map((c) => final.filter((recipe) => recipe.area === c));
      let s = [];
      for (var n of a) {
        for (var l of n) {
          s.push(l);
        }
      }
      final = s;
    } else {
      var b = final.filter((recipe) => recipe.area === area[0]);
      final = b;
    }

    if (ingredient.length > 1) {
      var w = ingredient.map((c) =>
        final.filter((recipe) => recipe.ingredient === c)
      );
      let s = [];
      for (var q of w) {
        for (var o of q) {
          s.push(o);
        }
      }
      final = s;
    } else {
      var h = final.filter((recipe) => recipe.area === area[0]);
      final = h;
    }
    setRecipes(final);
  };
  return (
    <div className="homeScreen">
      <header>
        <TopNavbar />
        <ServicesNav />
        <BottomNavBar />
      </header>
      <div className="main_body">
        <div className="filterSection">
          <h1>Filter Recipes</h1>
          <p>Check multiple boxes below to narrow recipe search results.</p>
          <FiltersSection
            handleFilters={(filters) => handleFilters(filters, "meals")}
            categories={meals}
            title={"By Meals"}
          />
          <FiltersSection
            handleFilters={(filters) => handleFilters(filters, "area")}
            categories={areas}
            title={"By Areas"}
          />
          <FiltersSection
            handleFilters={(filters) => handleFilters(filters, "ingredient")}
            categories={ingredients}
            title={"By Ingredients"}
          />
          <button onClick={submitFilters}>Submit</button>
        </div>
        <div className="products">
          {recipes.map((recipe, index) => {
            return <Product key={index} product={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
