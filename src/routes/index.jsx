import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
