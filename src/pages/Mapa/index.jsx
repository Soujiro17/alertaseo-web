import React from "react";
import MapaLeaftlet from "../../components/MapaLeaflet";
import AccountLayout from "../../layouts/AccountLayout";
import basurales from "../../data/basurales";
import { Container } from "./style";

const Mapa = () => {
  return (
    <AccountLayout>
      <Container>
        <MapaLeaftlet basurales={basurales} height="400px" width="100%" />
      </Container>
    </AccountLayout>
  );
};

export default Mapa;
