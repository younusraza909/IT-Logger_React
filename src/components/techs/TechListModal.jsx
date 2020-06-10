import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs, setLoading } from "../../actions/techAction";
import PropTypes from "prop-types";

const TechListModal = ({ techs, getTechs }) => {
  // Use Effect Hook is called after component is Mount
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!techs.loading &&
            techs.techs !== null &&
            techs.techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTechs: () => dispatch(getTechs()),
});

const mapStateToProps = (state) => ({
  techs: state.tech,
});

TechListModal.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechListModal);
