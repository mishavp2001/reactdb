import * as React from 'react';

const RecipeDetail = ({recipe}) => (
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
    </div>
    :
    <p>Choose recipe from the leeft side</p>
    }
  </div>

);

RecipeDetail.propTypes = {
  recipe: React.PropTypes.object
}
export default RecipeDetail;
