import React, { Component } from 'react';

class ExpenseForm extends Component {

  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      price: '',
    };

    const initialState = this.props.expense || this.defaultState;

    this.state = { ...initialState };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleExpenseChange = this.handleExpenseChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  }

  handleExpenseChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleExpenseChange}
        />
        <input
          type='number'
          value={this.state.price}
          placeholder='price'
          onChange={this.handlePriceChange}
        />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;