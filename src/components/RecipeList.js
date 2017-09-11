import React from 'react';
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.editRecipe = this.editRecipe.bind(this);
  }

  editRecipe(recipe) {
    console.log("Editing Recipe");
  }

  render() {
    const recipes = this.props.recipes;
    console.log(recipes);
    return (
      <div>
      {this.props.recipes === null ? console.log("no recipes yet") :
        this.props.recipes.map(function(recipe, index) {
          return (
            <RecipeItem number={index} key={index} recipe={recipe} onEdit={this.editRecipe} onDelete={this.props.onDelete}/>
          )
        }.bind(this))
      }
      </div>
    )
  }
};

export default RecipeList;
