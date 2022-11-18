import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Nav, NavItem, NavList, NavLink } from "./style";

const NavbarItem = ({ to, children, onClick }) => {
  return (
    <NavItem onClick={onClick}>
      <NavLink to={to} end>
        {children}
      </NavLink>
    </NavItem>
  );
};

NavbarItem.defaultProps = {
  onClick: () => {},
};

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const Navbar = () => {
  const { cerrarSesion } = useAuth();

  return (
    <Nav>
      <NavList>
        <NavbarItem to="/dashboard">Inicio</NavbarItem>
        <NavbarItem to="/registros">Registros</NavbarItem>
        <NavbarItem to="/mapa">Mapa</NavbarItem>
        <NavbarItem to="/rutas">Rutas</NavbarItem>
        <NavbarItem to="/camiones">Camiones</NavbarItem>
        <NavbarItem to="/" onClick={cerrarSesion}>
          Cerrar sesión
        </NavbarItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
