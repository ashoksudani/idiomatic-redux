import { connect } from 'react-redux';
import { togggleTodo } from 'actions';
import TodoList from 'components/todo-list';
import { withRouter } from 'react-router';
import { getVisibleTodos } from 'reducers';

const mapStateToProps = (state, props) => {
  return { todos: getVisibleTodos(state, props.match.params.filter) };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(togggleTodo(id));
//     }
//   };
// };

export default withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: togggleTodo }
  )(TodoList)
);
