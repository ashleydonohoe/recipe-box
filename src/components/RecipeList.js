import React from 'react';
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    return (
      <RecipeItem recipe={this.props.recipes[0]}/>
    )
  }
};

export default RecipeList;
