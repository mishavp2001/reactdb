import * as React from 'react';

const RecipeList = ({recipes, onSelectRecepie}) => (
          <ul className="list-unstyled">
              {recipes.map(item =>
                  <li key={item.id}>
                    <a href='#' onClick={onSelectRecepie.bind(null,item)}>{item.name}</a>
                  </li>
              )
            }
          </ul>
      )

RecipeList.propTypes={
  recipes: React.PropTypes.array.isRequired,
  onSelectRecepie: React.PropTypes.func.isRequired
};
export default RecipeList;
