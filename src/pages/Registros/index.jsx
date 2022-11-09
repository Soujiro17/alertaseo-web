import React from "react";
import { _ } from "gridjs-react";
import Table from "../../components/Table";
import columnas from "../../data/tableHeaders";
import AccountLayout from "../../layouts/AccountLayout";
import Acciones from "../../components/Acciones";

const datos = [
  {
    id: 0,
    nombre: "Basural encontrado con muchas cosas",
    tipo: "Basural",
    direccion: "Brasil 2564",
    reportadoPor: "Vicente Reyes",
    fecha: "06-11-2022",
    activo: "No",
    accion: _(<Acciones id="2" />),
  },
  {
    id: 1,
    nombre: "Basural encontrado con muchas cosas",
    tipo: "Basural",
    direccion: "Brasil 2564",
    reportadoPor: "Vicente Reyes",
    fecha: "06-11-2022",
    activo: "Sí",
  },
];

const Registros = () => {
  return (
    <AccountLayout>
      <Table data={datos} columns={columnas} />
    </AccountLayout>
  );
};

export default Registros;
