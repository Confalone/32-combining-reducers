import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';

class Dashboard extends Component {
  render() {
    let {
      categories,
      categoryCreate,
      categoryUpdate,
      categoryDestroy,
    } = this.props;

    return (
      <div>
        <CategoryForm onComplete={categoryCreate}/>
        {/* {
          categories.map((category, index) => 
        <div key={index}>
          <CategoryItem category={category}/>
        </div>
        )
        } */}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return{
    categories: state.categories,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.createCategory(data)),
    categoryUpdate: (data) => dispatch(category.updateCategory(data)),
    categoryDestroy: (data) => dispatch(category.destroyCategory(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);