import styled from "styled-components";
import { NavLink as NL } from "react-router-dom";
import colors from "../../constants/colors";
import { onHoverPrimary } from "../../constants/styles";

export const Nav = styled.nav`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.primary};
`;

export const NavList = styled.ul`
  margin: 0%;
  padding: 0%;
  display: flex;
  list-style: none;
  height: 100%;
`;

export const NavItem = styled.li`
  width: 200px;
`;

export const NavLink = styled(NL)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${colors.white[0]};
  background-color: ${colors.primary};
  text-decoration: none;

  ${onHoverPrimary}

  &.active {
    background-color: ${colors.black[1]};
    color: ${colors.black[9]};
  }
`;
