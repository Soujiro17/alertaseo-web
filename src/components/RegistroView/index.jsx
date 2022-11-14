import React from "react";
import { useOutletContext } from "react-router-dom";

const RegistroView = () => {
  const { value } = useOutletContext();

  return <div>RegistroView</div>;
};

export default RegistroView;
