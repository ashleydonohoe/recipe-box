import React, { Component } from 'react';
import RecipeList from "./components/RecipeList";
import Recipes from "./Recipes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Recipe Box</h1>
        <RecipeList recipes={Recipes}/>
        <button className="btn btn-primary">Add Recipe</button>
      </div>
    );
  }
}

export default App;
