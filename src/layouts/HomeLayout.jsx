import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Logo from "../components/Logo";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    background-image: url("/login-background.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px) brightness(50%);
    scale: 1.1;
  }
`;

const HomeLayout = ({ children }) => {
  return (
    <Container>
      <Card disableBoxShadow>
        <Logo redirect />
        {children}
      </Card>
    </Container>
  );
};

HomeLayout.defaultProps = {
  children: <p>Children</p>,
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
