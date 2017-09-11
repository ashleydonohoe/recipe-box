import React, { Component } from 'react';
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    // Fetch recipes from local storage
    this.fetchRecipes();
  }

  addRecipe(recipe) {
    console.log("Adding recipe");
    const newState = this.state.recipes.concat(recipe);
    // Set new value for local storage with new recipe
    localStorage.setItem("recipes", JSON.stringify(newState));
    this.setState({
      recipes: newState
    })
  }

  fetchRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    if(recipes != null) {
      this.setState({
        recipes: recipes
      });
    } else {
      localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
    }
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
