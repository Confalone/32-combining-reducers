import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createCategory, updateCategory, destroyCategory } from '../../action/category';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


const Dashboard = props => {
  return (
    <Fragment>
      <CategoryForm onComplete={props.createCategory} buttonText="Create" />
      {props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} onComplete={props.updateCategory} onDelete={props.destroyCategory} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  createCategory: category => dispatch(createCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);