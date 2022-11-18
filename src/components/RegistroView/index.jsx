import React from "react";
import { useOutletContext } from "react-router-dom";
import MapaLeaflet from "../MapaLeaflet";
import Input from "../../shared/Input";
import {
  Container,
  DatosContainer,
  InputGroup,
  InputLabel,
  MapaContainer,
} from "./style";
import Label from "../../shared/Label";

const RegistroView = () => {
  const { value } = useOutletContext();

  return (
    <Container>
      <DatosContainer>
        <InputGroup>
          <InputLabel>
            <Label htmlFor="id">ID</Label>
            <Input id="id" value={value.id} width="100%" disabled />
          </InputLabel>
          <InputLabel>
            <Label htmlFor="activo">Activo</Label>
            <Input id="activo" value={value.activo} width="100%" disabled />
          </InputLabel>
        </InputGroup>
        <InputLabel>
          <Label>Reportado por</Label>
          <Input value={value.reportadoPor} width="100%" disabled />
        </InputLabel>
        <InputGroup>
          <InputLabel>
            <Label>Fecha</Label>
            <Input value={value.fecha} width="100%" disabled />
          </InputLabel>
          <InputLabel>
            <Label>Dirección</Label>
            <Input value={value.direccion} width="100%" disabled />
          </InputLabel>
        </InputGroup>
      </DatosContainer>
      <MapaContainer>
        <MapaLeaflet punto={value} height="100%" width="100%" />
      </MapaContainer>
    </Container>
  );
};

export default RegistroView;
