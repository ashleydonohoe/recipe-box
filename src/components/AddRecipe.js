import React, { Component } from 'react';

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
    this.setState({
      ingredients: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const ingredients = this.state.ingredients.split(",");
    const recipe = {
      name: this.state.name,
      ingredients: ingredients
    };

    this.props.onAdd(recipe);

  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addRecipe">Add Recipe</button>
        <div className="modal fade" id="addRecipe" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Add a Recipe</h4>
              </div>
              <div className="modal-body">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label>Recipe</label>
                  <input type="text" className="form-control" id="recipe-name" aria-describedby="recipe-name" placeholder="Recipe Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div className="form-group">
                  <label>Ingredients</label>
                  <input type="text" className="form-control ingredients-input" id="ingredients" placeholder="Enter ingredients, separated by commas" value={this.state.ingredients} onChange={this.handleIngredientsChange.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
                <button className="btn btn-default" data-dismiss="modal">Cancel</button>
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
