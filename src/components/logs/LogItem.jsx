import React from "react";
import Moment from "react-moment";
//Moment pkg is used for displaying time in format
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> Last Updated By
          <span className="black-text">{log.tech}</span> on
          <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.prototype = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
