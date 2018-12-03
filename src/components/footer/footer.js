import React from 'react';
import FilterLink from 'components/filter-link';

const Footer = () => (
  <p>
    <FilterLink filter="all">ALL</FilterLink>{' '}
    <FilterLink filter="active">Active</FilterLink>{' '}
    <FilterLink filter="completed">Completed</FilterLink>
  </p>
);
export default Footer;
