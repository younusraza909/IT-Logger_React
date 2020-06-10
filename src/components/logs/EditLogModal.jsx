import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechSelectOption from "../techs/TechSelectOption";
import { updateLogs } from "../../actions/logAction";

const EditLogModal = ({ updateLogs, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
      // eslint-disable-next-line
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      //toast i sue to show messages when there is incomplete form on check  its materialize inbuilt property
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newUpdateLogs = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLogs(newUpdateLogs);
      M.toast({ html: `Log Updates By ${tech}` });
      //   Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  // if attention value is true than value will be checked
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention?</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn blue "
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapDispatchToProps = (dispatch) => ({
  updateLogs: (log) => dispatch(updateLogs(log)),
});

EditLogModal.protoType = {
  updateLogs: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal);
