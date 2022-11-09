import React from "react";
import PropTypes from "prop-types";
import Accion from "../Accion";
import CirculosContainer from "./style";

const Acciones = ({ id }) => {
  return (
    <CirculosContainer>
      <Accion delete />
      <Accion edit="/registro/edit/1987" />
      <Accion go="/registro" />
    </CirculosContainer>
  );
};

Acciones.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Acciones;
