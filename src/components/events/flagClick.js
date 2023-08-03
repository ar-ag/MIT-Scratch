import React, { useState } from "react";
import { connect } from "react-redux";
import { setFlag } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";
import FlagIcon from "@material-ui/icons/Flag";

const flagClick = ({ events, comp_id }) => {
  return (
    // Flag Component
    <Paper elevation={3}>
      <div className="rounded text-center bg-yellow-400 p-2 my-3">
        <div className="grid grid-cols my-2">
          <div className="text-white">
            When{" "}
            <span className="w-[10px] h-[10px] text-green-500">
              <FlagIcon />
            </span>{" "}
            Flag click
          </div>
        </div>
        <div
          id={comp_id}
          className="rounded flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Flag {events.flag === 0 ? "False" : "True"}
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
    set_flag: (value) => dispatch(setFlag(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(flagClick);