import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import TodoList from 'components/todo-list';
import { withRouter } from 'react-router';
import { getVisibleTodos } from 'reducers';

class VisibleTodos extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, props) => {
  const filter = props.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter: filter
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodos)
);

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(togggleTodo(id));
//     }
//   };
// };
