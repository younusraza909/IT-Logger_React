import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(tech.id);
    M.toast({
      html: `Technician Deleted Successfully`,
    });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteTechs: (id) => dispatch(deleteTechs(id)),
});

export default connect(null, mapDispatchToProps)(TechItem);
