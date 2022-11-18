import React from "react";
import MapaLeaftlet from "../../components/MapaLeaflet";
import AccountLayout from "../../layouts/AccountLayout";
import camiones from "../../data/camiones";

const Camiones = () => {
  return (
    <AccountLayout>
      <MapaLeaftlet height="400px" width="100%" camiones={camiones} />
    </AccountLayout>
  );
};

export default Camiones;
