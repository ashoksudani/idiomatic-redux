import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togggleTodo } from 'actions';
import TodoList from 'components/todo-list';
import { withRouter } from 'react-router';
import { getVisibleTodos } from 'reducers';
import { fetchTodos } from 'api';

class VisibleTodos extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
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
    { onTodoClick: togggleTodo }
  )(VisibleTodos)
);

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(togggleTodo(id));
//     }
//   };
// };
