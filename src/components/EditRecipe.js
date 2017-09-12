import React, { Component } from 'react';
import $ from 'jquery';

class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients
    }

    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleIngredientsChange(e) {
    const ingredients = e.target.value.split(",");
    this.setState({
      ingredients: ingredients
    })
  }

  handleUpdateSubmit(e) {
    e.preventDefault();
    const recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients
    };

    // Check if recipe is complete
    if(recipe.name !== "" && recipe.ingredients.length > 0) {
      this.props.onEdit(recipe, this.props.number);
      $("#close-edit").click();
    } else {
      alert("Be sure to include both a name and ingredients");
    }
  }

  render() {
    const modalId = "editRecipe" + this.props.number;
    return (
      <div>
        <button className="btn btn-primary" data-toggle="modal" data-target={"#" + modalId}>Edit Recipe</button>
        <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel2">Edit Recipe</h4>
              </div>
              <div className="modal-body">
              <form onSubmit={this.handleUpdateSubmit}>
                <div className="form-group">
                  <label>Recipe</label>
                  <input type="text" className="form-control" id="recipe-name" aria-describedby="recipe-name" placeholder="Recipe Name" value={this.state.name}
                  onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div className="form-group">
                  <label>Ingredients</label>
                  <input type="text" className="form-control ingredients-input" id="ingredients" placeholder="Enter ingredients, separated by commas" value={this.state.ingredients}
                  onChange={this.handleIngredientsChange.bind(this)}/>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save Recipe</button>
                  <button id="close-edit" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditRecipe;
