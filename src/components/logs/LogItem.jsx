import React from "react";
import Moment from "react-moment";
//Moment pkg is used for displaying time in format
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLogs, setCurrent } from "../../actions/logAction";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLogs, setCurrent }) => {
  const onDelete = () => {
    deleteLogs(log.id);
    M.toast({ html: `Log with Id ${log.id} Has Been removed Successfully` });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> Last Updated By
          <span className="black-text">{log.tech}</span> on
          <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.prototype = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteLogs: (id) => dispatch(deleteLogs(id)),
  setCurrent: (currentLog) => dispatch(setCurrent(currentLog)),
});

export default connect(null, mapDispatchToProps)(LogItem);
