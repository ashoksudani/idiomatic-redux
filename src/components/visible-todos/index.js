import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import TodoList from 'components/todo-list';
import { withRouter } from 'react-router';
import { getVisibleTodos, getIsFetching, getErrorMessage } from 'reducers';
import FetchError from 'components/fetch-error';

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
    if (this.props.isFetching && !this.props.todos.length) {
      return <span>Loading....</span>;
    }

    if (this.props.errorMessage && !this.props.todos.length) {
      return (
        <FetchError
          error={this.props.errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, props) => {
  const filter = props.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter: filter,
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter)
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
