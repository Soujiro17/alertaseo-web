import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./style";

export default function Card({ children, disableFlex, ...rest }) {
  return (
    <CardContainer disableFlex={disableFlex} {...rest}>
      {children}
    </CardContainer>
  );
}

Card.defaultProps = {
  disableFlex: false,
  children: <p>Child</p>,
};

Card.propTypes = {
  children: PropTypes.node,
  disableFlex: PropTypes.bool,
};
