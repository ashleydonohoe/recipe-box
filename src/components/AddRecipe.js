import React, { Component } from 'react';
import $ from 'jquery';

class AddRecipe extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        ingredients: ""
      }
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

  handleSubmit(e) {
    e.preventDefault();
    const recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients
    };

    // Check if recipe is complete
    if(recipe.name !== "" && this.state.ingredients.length > 0) {
      this.props.onAdd(recipe);

      // Stimulate close button to automatically close the modal
      $("#closeBtn").click();
    } else {
      alert("Be sure to enter a name and ingredients!");
    }
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addRecipe">Add Recipe</button>
        <div ref="modal" className="modal fade" id="addRecipe" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Add a Recipe</h4>
              </div>
              <div className="modal-body">
              <form id="" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label>Recipe</label>
                  <input type="text" className="form-control" id="recipe-name" aria-describedby="recipe-name" placeholder="Recipe Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div className="form-group">
                  <label>Ingredients</label>
                  <input type="text" className="form-control ingredients-input" id="ingredients" placeholder="Enter ingredients, separated by commas" value={this.state.ingredients} onChange={this.handleIngredientsChange.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
                <button id="closeBtn" className="btn btn-default" data-dismiss="modal">Cancel</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecipe;
