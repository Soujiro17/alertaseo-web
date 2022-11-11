import React from "react";
import { Outlet } from "react-router-dom";
import Table from "../../components/Table";
import columnas from "../../data/tableHeaders";
import AccountLayout from "../../layouts/AccountLayout";

const datos = [
  {
    id: 0,
    nombre: "Basural encontrado con muchas cosas",
    tipo: "Basural",
    direccion: "Brasil 2564",
    reportadoPor: "Vicente Reyes",
    fecha: "06-11-2022",
    activo: "No",
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
      <Outlet />
    </AccountLayout>
  );
};

export default Registros;
