import React from "react";
import { useOutletContext } from "react-router-dom";
import MapaLeaflet from "../MapaLeaflet";
import { Container, DatosContainer, MapaContainer } from "./style";

const RegistroView = () => {
  const { value } = useOutletContext();

  return (
    <Container>
      <DatosContainer>{JSON.stringify(value)}</DatosContainer>
      <MapaContainer>
        <MapaLeaflet punto={value} height="400px" width="100%" />
      </MapaContainer>
    </Container>
  );
};

export default RegistroView;
