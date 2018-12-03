import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink
      exact
      to={filter === 'all' ? '' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
      }}
    >
      {children}
    </NavLink>
  );
};

/*

//Filtering by dispatching setVisibilityFilter action

import { connect } from 'react-redux';
import Link from 'components/link';
import { setVisibilityFilter } from 'actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: e => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
*/

export default FilterLink;
