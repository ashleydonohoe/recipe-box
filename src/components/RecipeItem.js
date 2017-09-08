import React from 'react';
import EditRecipe from "./EditRecipe";

class RecipeItem extends React.Component {
  render() {
    const name = this.props.recipe.name;
    const ingredients = this.props.recipe.ingredients;
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {name}
                    </a>
                  </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    <h4 className="text-center ingredient-title">Ingredients</h4>
                    <hr/>
                    {ingredients.map(function(ingredient, index) {
                      return (
                        <p className="ingredient" key={index}>{ingredient}</p>
                      )
                    })}
                    <div className="button-group">
                      <EditRecipe/>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
};

export default RecipeItem;
