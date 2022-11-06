import React from "react";
import { Nav, NavItem, NavList, NavLink } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/dashboard" end>
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/registros" end>
            Registros
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mapa" end>
            Mapa
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
