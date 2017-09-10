import React, { Component } from 'react';
import RecipeList from "./components/RecipeList";
import Recipes from "./Recipes";
import AddRecipe from "./components/AddRecipe";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: Recipes
    }
  }

  addRecipe(recipe) {
    console.log("Adding recipe");
    const newState = this.state.recipes.concat(recipe);
    this.setState({
      recipes: newState
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Recipe Box</h1>
        <RecipeList recipes={this.state.recipes}/>
        <AddRecipe onAdd={this.addRecipe.bind(this)}/>
      </div>
    );
  }
}

export default App;
