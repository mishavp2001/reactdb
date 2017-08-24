import React from "react";

import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import CreateForm from "./CreateForm"
import SearchBox from "./SearchBox"

const LOCAL_STORAGE_KEY = 'recipes';

class App extends React.Component {
  constructor(){
    super();
    const localStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    this.state = {
      showCreate: false,
      recipes: localStorage ? JSON.parse(localStorage) : [],
      selectedRecipe: null,
      search: ''
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

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));
  }

  handleSelectRecipe(recipe){
    //console.log(recepie);
    this.setState(
      {showCreate: false,
      selectedRecipe: recipe}
    )
  }

  handleSearchChange(search){
    this.setState(
      {search}
    );
  }

  handleDelete (){
    let newSet = this.state.recipes.filter(item => {
      return (item.name !== this.state.selectedRecipe.name)
    });
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSet));
    this.setState({recipes: newSet,
                  selectedRecipe: null})
  }

  render() {
    const {recipes, selectedRecipe, showCreate, search} = this.state;
    const filterRecipes = recipes
    .filter(recipe => recipe.name.toLowerCase().indexOf(search.toLowerCase())> -1)
    .sort((a,b) => a.name > b.name);
    return (
      <div className="container">
        <h1>Recipe Database</h1>
        <div className='row'>
            <div className='col-xs-4'>
              <SearchBox onChange={this.handleSearchChange.bind(this)}/>
              <RecipeList
                  recipes={filterRecipes}
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
              {showCreate ? <CreateForm onSubmit={this.handleCreateReceipt.bind(this)}/> : <RecipeDetail onDelete={this.handleDelete.bind(this)} recipe={selectedRecipe}/>}
            </div>
        </div>
      </div>
    )
  }

}

export default App;
