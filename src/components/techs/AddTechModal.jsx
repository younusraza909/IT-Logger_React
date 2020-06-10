import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTechs } from "../../actions/techAction";
import PropTypes from "prop-types";

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      //toast i sue to show messages when there is incomplete form on check  its materialize inbuilt property
      M.toast({ html: "Please enter the first and last name" });
    } else {
      const newTechs = {
        firstName,
        lastName,
      };

      addTechs(newTechs);
      M.toast({
        html: `Technician Added Names ${firstName} ${lastName}`,
      });

      //   Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4> New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firsName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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

AddTechModal.propTypes = {
  addTechs: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addTechs: (tech) => dispatch(addTechs(tech)),
});

export default connect(null, mapDispatchToProps)(AddTechModal);
