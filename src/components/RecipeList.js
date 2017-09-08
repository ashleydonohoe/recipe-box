import React from 'react';
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  editRecipe() {
    console.log("Editing Recipe");
  }

  deleteRecipe() {
    console.log("Deleting recipe");
  }

  render() {
    const recipes = this.props.recipes;
    return (
      <RecipeItem recipe={recipes[0]} onEdit={this.editRecipe.bind(this)} onDelete={this.deleteRecipe.bind(this)}/>
    )
  }
};

export default RecipeList;
