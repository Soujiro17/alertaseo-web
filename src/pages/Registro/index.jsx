import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AccountLayout from "../../layouts/AccountLayout";

const Registro = () => {
  const location = useLocation();

  const {
    state: { value = {} },
  } = location;

  return (
    <AccountLayout>
      <Outlet context={{ value }} />
    </AccountLayout>
  );
};

export default Registro;
