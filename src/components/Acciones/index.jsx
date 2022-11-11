import React from "react";
import PropTypes from "prop-types";
import Accion from "../Accion";
import CirculosContainer from "./style";

const Acciones = ({ id }) => {
  const onDelete = () => {};
  const onGo = () => {};
  const onEdit = () => {};

  return (
    <CirculosContainer>
      <Accion onDelete={onDelete} />
      <Accion onGo={onGo} />
      <Accion onEdit={onEdit} />
    </CirculosContainer>
  );
};

Acciones.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Acciones;
