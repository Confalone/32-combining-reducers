import React, { Component, Fragment } from 'react';


export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: '',
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({name: event.target.value});
  }

  handleBudgetChange(event) {
    this.setState({budget: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      name: '',
      budget: '',
    })
  }
  
  render() { 
    console.log('STATE', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          placeholder='Category'
          onChange={this.handleCategoryChange}
        />
        <input
          type='number'
          placeholder='Budget'
          onChange={this.handleBudgetChange}
        />
        <button type='submit'>Create your Category</button>
      
      </form>
      
    )
  }
}