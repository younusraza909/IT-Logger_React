import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";

const TechSelectOption = ({ getTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

TechSelectOption.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getTechs: () => dispatch(getTechs()),
});
const mapStateToProps = (state) => ({
  techs: state.tech,
});
export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOption);
