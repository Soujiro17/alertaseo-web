/* eslint-disable no-alert */
/* eslint-disable no-useless-return */
import React from "react";
import PropTypes from "prop-types";
import Accion from "../Accion";
import CirculosContainer from "./style";

const Acciones = ({ id, navigate }) => {
  const onDelete = () => {
    if (!window.confirm("Deseas eliminar este registro?")) return;
  };
  const onGo = () => {
    navigate(`/registros/${id}`);
  };
  const onEdit = () => {
    navigate(`/registros/edit/${id}`);
  };

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
  navigate: PropTypes.any.isRequired,
};

export default Acciones;
