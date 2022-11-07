import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Container = styled.main`
  height: 80vh;
  padding: 4%;
`;

const AccountLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

AccountLayout.defaultProps = {
  children: <p>Children</p>,
};

AccountLayout.propTypes = {
  children: PropTypes.node,
};
export default AccountLayout;
