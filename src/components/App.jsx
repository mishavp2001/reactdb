import React from "react";

import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import CreateForm from "./CreateForm"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showCreate: false
    }
  }

  showCreate() {
    this.setState({
      showCreate: !this.state.showCreate
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Recipe Database</h1>
        <div className='row'>
            <div className='col-xs-4'>
              <RecipeList />
              <button type="button"
                className='bbtn bbtn-primary'
                style={{width: '100%',
                marginBottom: '5px'}}
                onClick={this.showCreate.bind(this)}>
                Create new recipe
              </button>
            </div>
            <div className='col-xs-8'>
              {this.state.showCreate ? <CreateForm /> : <RecipeDetail />}
            </div>
        </div>
      </div>
    )
  }

}

export default App;
