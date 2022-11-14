/* eslint-disable no-alert */
/* eslint-disable no-useless-return */
import React from "react";
import PropTypes from "prop-types";
import Accion from "../Accion";
import CirculosContainer from "./style";

const Acciones = ({ navigate, value }) => {
  const onDelete = () => {
    if (!window.confirm("Deseas eliminar este registro?")) return;
  };
  const onGo = () => {
    navigate("/registro/view", { state: { value } });
  };
  const onEdit = () => {
    navigate("/registro/edit", { state: { value } });
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
  navigate: PropTypes.any.isRequired,
  value: PropTypes.object.isRequired,
};

export default Acciones;
