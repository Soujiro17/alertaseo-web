import React from "react";
import { useOutletContext } from "react-router-dom";
import Input from "../../shared/Input";
import Label from "../../shared/Label";
import Card from "../Card";
import MapaLeaftlet from "../MapaLeaflet";
import { Container, EditForm } from "./style";

const RegistroEdit = () => {
  const { value } = useOutletContext();

  return (
    <Container>
      <EditForm>
        <Card width="100%" height="100%">
          <MapaLeaftlet punto={value} height="200px" width="100%" />
          <Label htmlFor="direccion">Dirección</Label>
          <Input id="direccion" value={value.direccion} width="100%" />
          <Label htmlFor="reportadoPor">Reportado por</Label>
          <Input id="reportadoPor" value={value.reportadoPor} width="100%" />
          <Label htmlFor="fecha">Fecha</Label>
          <Input type="date" id="fecha" value={value.fecha} width="100%" />
        </Card>
      </EditForm>
    </Container>
  );
};

export default RegistroEdit;
