import React, { Component } from 'react';

class EditRecipe extends Component {
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
                <h4 className="modal-title" id="myModalLabel">Edit Recipe</h4>
              </div>
              <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Recipe</label>
                  <input type="text" className="form-control" id="recipe-name" aria-describedby="recipe-name" placeholder="Recipe Name"/>
                </div>
                <div className="form-group">
                  <label>Ingredients</label>
                  <input type="text" className="form-control ingredients-input" id="ingredients" placeholder="Enter ingredients, separated by commas"/>
                </div>
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save Recipe</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditRecipe;
