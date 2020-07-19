// import React from "react";
// import { connect } from "react-redux";
// import Todo from "./Todo";

// const TodoList = ({ todos }) => (
//   <ul>
//     {todos.map((t) => {
//       return <Todo key={t.id} {...t} />;
//     })}
//   </ul>
// );

// const mapStateToProps = (state) => {
//   return { todos: state.todos };
// };

// export default connect(mapStateToProps)(TodoList);

import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos, filter }) => {
  function filterTodos() {
    switch (filter) {
      case "all":
        return todos;
      case "complete":
        return todos.filter((t) => t.complete);
      case "incomplete":
        return todos.filter((t) => !t.complete);
      default:
        return todos;
    }
  }
  function renderTodos() {
    const filteredTodos = filterTodos();
    return filteredTodos.map((t) => {
      return <Todo key={t.id} {...t} />;
    });
  }
  return <ul>{renderTodos()}</ul>;
};

const mapStateToProps = ({ todos, filter }) => {
  return { todos, filter };
};

export default connect(mapStateToProps)(TodoList);
