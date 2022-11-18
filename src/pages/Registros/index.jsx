import React from "react";
import Table from "../../components/Table";
import basurales from "../../data/basurales";
import columnas from "../../data/tableHeaders";
import AccountLayout from "../../layouts/AccountLayout";

const Registros = () => {
  return (
    <AccountLayout>
      <Table data={basurales} columns={columnas} />
    </AccountLayout>
  );
};

export default Registros;
