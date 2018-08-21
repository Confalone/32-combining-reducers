import React, {Component} from 'react';
import CategoryForm from '../category-form';
import * as categoryActions from '../../action/category';
import {connect} from 'react-redux';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {editing: false};
    
    // this.handleUpdate = this.handleUpdate.bind(this);
  }

  // handleUpdate(category) {
  //   this.props.categoryUpdate(category);
  //   this.setState({editing: false});
  // }

  render() {
    let {
      category, 
      categoryDestroy,
      categoryUpdate,
    } = this.props;

    return (
      <div>
        <h2>Name: {category.name}</h2>
        <h2>Name: ${category.budget}</h2>
        <button onClick={() => categoryDestroy(category)}>Delete</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    categories: state.categories,
  };
};

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (data) => dispatch(categoryActions.updateCategory(data)),
  categoryDestroy: (data) => dispatch(categoryActions.destroyCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

