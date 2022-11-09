import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Circulo from "./style";

const Accion = ({ delete: del, edit, go }) => {
  if (del) return <Circulo className="delete" />;

  return (
    <Link to={edit || go || "/"}>
      <Circulo className={edit ? "edit" : "go"} />
    </Link>
  );
};

Accion.defaultProps = {
  delete: false,
  edit: "",
  go: "",
};

Accion.propTypes = {
  delete: PropTypes.bool,
  edit: PropTypes.string,
  go: PropTypes.string,
};

export default Accion;
