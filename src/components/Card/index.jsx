import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./style";

export default function Card({ children, ...rest }) {
  return <CardContainer {...rest}>{children}</CardContainer>;
}

Card.defaultProps = {
  children: <p>Child</p>,
};

Card.propTypes = {
  children: PropTypes.node,
};
