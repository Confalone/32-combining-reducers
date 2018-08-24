import React, { Component } from 'react';

class CategoryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      budget: '',
    };

    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
    
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }
  
  onSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  }
 
  handleCategoryChange(event) {
    this.setState({name: event.target.value});
  }

  handleBudgetChange(event) {
    this.setState({budget: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="name" 
          placeholder="name" 
          type='text'
          value={this.state.name} 
          onChange={this.handleCategoryChange} 
        />
        <input 
          name="budget" 
          placeholder="budget" 
          type='number'
          value={this.state.budget} 
          onChange={this.handleBudgetChange} 
        />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;