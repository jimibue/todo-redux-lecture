import React from "react";
import { connect } from "react-redux";

class TodoForm extends React.Component {
  state = { name: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { name } = this.state;
    const todo = { name, id, complete: false };
    dispatch({ type: "ADD_TODO", todo: todo });
    dispatch({ type: "INC_ID" });

    this.setState({ name: "" });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h3>Add A Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { id: state.nextId };
};

export default connect(mapStateToProps)(TodoForm);
