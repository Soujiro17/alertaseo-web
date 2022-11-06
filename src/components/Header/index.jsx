import React from "react";
import HeaderContainer from "./style";
import Logo from "../Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo white redirect height="100%" width="160px" />
    </HeaderContainer>
  );
};

export default Header;
