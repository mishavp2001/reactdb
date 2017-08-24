import * as React from 'react';

class CreateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      ingridients:'',
      recipe:'',
      created: false
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const {ingridients, name, recipe} = this.state;
    this.props.onSubmit(name,ingridients, recipe);
    this.resetForm();
    this.setState({lastname: name});
    this.setState({created: true});
    this.refs.name.focus();
  }

  resetForm (e) {
    this.setState({
      name: '',
      ingridients:'',
      recipe:''
    })
  }

  handleChangeValue(name, e){
    e.preventDefault();
    let obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
    console.log(name);
  }

  render() {
      const {name, ingridients, recipe, created} = this.state;

      return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          {created && <div className="alert alert-success">Your recipe {this.state.lastname} was just created !</div>}
          <div className='form-group'>
            <label htmlFor='name'>
              Name
            </label>
            <input
              type="text"
              className='form-control'
              rows='1'
              id='name'
              placeholder='Receipe Name'
              value ={name}
              ref='name'
              onChange={this.handleChangeValue.bind(this, 'name')}
              />
          </div>
          <div className='form-group'>
            <label htmlFor='ingridients'>
              Ingridients
            </label>
            <textarea
              className='form-control'
              rows='5'
              id='ingridients'
              placeholder='Enter Ingridients'
              value ={ingridients}
              onChange={this.handleChangeValue.bind(this, 'ingridients')}
              />
          </div>
          <div className='form-group'>
            <label htmlFor='instructions'>
              Instructions
            </label>
            <textarea
              className='form-control'
              rows='5'
              id='instructions'
              placeholder='Enter instructions'
              value ={recipe}
              onChange={this.handleChangeValue.bind(this, 'recipe')}
              />
          </div>
          <input className='btn btn-default' type='submit' value='Create' />
        </form>
      );
    }
  }

  CreateForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  }

export default CreateForm;
