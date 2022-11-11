import React from "react";
import { Outlet } from "react-router-dom";
import AccountLayout from "../../layouts/AccountLayout";

const Registro = () => {
  return (
    <AccountLayout>
      <Outlet />
    </AccountLayout>
  );
};

export default Registro;
