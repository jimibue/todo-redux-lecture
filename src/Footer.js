import React from "react";
import { connect } from "react-redux";
import { setFilter } from "./actions";

const Footer = ({ filter, setFilter }) => {
  function isActive(type) {
    if (type == filter) {
      return { color: "red" };
    }
  }
  // We normally but actions in our action folders
  // function setFilter(filter) {
  //   dispatch({ type: "SET_FILTER", filter });
  // }
  return (
    <div>
      <div style={isActive("all")} onClick={() => setFilter("all")}>
        all
      </div>
      <div style={isActive("complete")} onClick={() => setFilter("complete")}>
        complete
      </div>
      <div
        style={isActive("incomplete")}
        onClick={() => setFilter("incomplete")}
      >
        incomplete
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
