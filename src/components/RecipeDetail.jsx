import * as React from 'react';

const RecipeDetail = ({onDelete, recipe}) => {
  const confirmDelete =() =>
  {
    if(confirm('Are you sure you want to delete?')){
      onDelete();
    }
  }

  return (
    <div>
      { recipe ?
      <div>
        <h2>
          {recipe.name}
        </h2>
        <h3>Ingridients:</h3>
        <p style={{whiteSpace:'pre-wrap'}}>{recipe.ingridients}</p>
        <h3>Instructions:</h3>
        <p style={{whiteSpace:'pre-wrap'}}>{recipe.instructions}</p>
        <button type='button' className='btn btn-danger' onClick={confirmDelete}>Delete</button>
      </div>
      :
      <p>Choose recipe from the leeft side</p>
      }
    </div>
  );
}

RecipeDetail.propTypes = {
  recipe: React.PropTypes.object,
  onDelete: React.PropTypes.func.isRequired
}
export default RecipeDetail;
