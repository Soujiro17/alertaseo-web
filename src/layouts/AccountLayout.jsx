import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import colors from "../constants/colors";

const Container = styled.main`
  min-height: 80vh;
  padding: 4%;
  background-color: ${colors.black[1]};
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
