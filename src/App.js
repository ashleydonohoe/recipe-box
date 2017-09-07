import React, { Component } from 'react';
import RecipeList from "./components/RecipeList";
import Recipes from "./Recipes";
import AddRecipe from "./components/AddRecipe";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Recipe Box</h1>
        <RecipeList recipes={Recipes}/>
        <AddRecipe/>
      </div>
    );
  }
}

export default App;
