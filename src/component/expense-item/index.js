import React, { Component } from 'react';
import ExpenseForm from '../expense-form';

import './category-item.scss';

export default class ExpenseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.showEditForm = this.showEditForm.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  showEditForm() {
    this.setState({ editing: true });
  }

  updateExense (expense) {
    this.setState({
      editing: false,
    });
    this.props.onComplete(expense);
  }

  deleteExpense () {
    this.props.onDelete(this.props.expense);
  }


  render() {

    let buttonText = this.props.editing ? 'update' : 'create';
    return (
      <div> 
        <span onClick={this.showEditForm}>{this.props.expense.name}</span>
        <span id='budget-item' onClick={this.showEditForm}>${this.props.expense.price}</span>
        <button onClick={this.deleteCategory}>x</button>
        {this.state.editing && <ExpenseForm onComplete={this.updateCategory} buttonText="update" category={this.props.category} />}
      </div>
    );
  }
}