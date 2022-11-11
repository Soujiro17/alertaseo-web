import React from "react";
import PropTypes from "prop-types";
import Circulo from "./style";

const Accion = ({ onEdit, onGo, onDelete }) => {
  let className;

  if (onEdit) {
    className = "edit";
  } else if (onGo) className = "go";
  else if (onDelete) className = "delete";

  return <Circulo onClick={onEdit || onGo || onDelete} className={className} />;
};

Accion.defaultProps = {
  onEdit: null,
  onGo: null,
  onDelete: null,
};

Accion.propTypes = {
  onEdit: PropTypes.func,
  onGo: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Accion;
