import React from "react";

import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import CreateForm from "./CreateForm"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showCreate: false,
      recipes: [],
      selectedRecipe: null
    }
  }

  showCreate() {
    this.setState({
      showCreate: true
    })
  }

  handleCreateReceipt(name, ingridients,instructions) {
    //console.log(name, ingridients,instructions);
    const newRecipes = this.state.recipes.concat({
      id: new Date().getTime(),
      name, ingridients,instructions});
    this.setState({recipes: newRecipes})

  }

  handleSelectRecipe(recipe){
    //console.log(recepie);
    debugger;
    this.setState(
      {showCreate: false,
      selectedRecipe: recipe}
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Recipe Database</h1>
        <div className='row'>
            <div className='col-xs-4'>
              <RecipeList
                  recipes={this.state.recipes}
                  onSelectRecepie={this.handleSelectRecipe.bind(this)}
                 />
              <button type="button"
                className='bbtn btn-primary'
                style={{width: '100%',
                marginBottom: '5px'}}
                onClick={this.showCreate.bind(this)}>
                Create new recipe
              </button>
            </div>
            <div className='col-xs-8'>
              {this.state.showCreate ? <CreateForm onSubmit={this.handleCreateReceipt.bind(this)}/> : <RecipeDetail recipe={this.state.selectedRecipe}/>}
            </div>
        </div>
      </div>
    )
  }

}

export default App;
