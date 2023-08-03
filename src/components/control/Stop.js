import React from "react";
import { connect } from "react-redux";
import { setSpace, setStop } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";
import BlockIcon from "@material-ui/icons//Block";

const Stop = ({ events, comp_id }) => {
  return (
    // Space Component
    <Paper elevation={3}>
      <div className="rounded text-center bg-red-400 p-2 my-3">
        <div className="grid grid-cols-3 my-2">
          <div className="text-white">Stop </div>
          <span className="w-[10px] h-[10px] text-red-700">
            <BlockIcon />
          </span>{" "}
          <div className="text-white">All</div>
        </div>
        <div
          id={comp_id}
          className="rounded flex flex-row flex-wrap bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Stop {events.stop === 0 ? "False" : "True"}
        </div>
      </div>
    </Paper>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_stop: (value) => dispatch(setStop(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stop);