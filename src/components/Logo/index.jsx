import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import images from "../../data/images";
import Img from "../../shared/Img";

const Logo = ({ height, width, redirect, white }) => {
  const logo = (
    <Img
      height={height}
      width={width}
      src={white ? images.logoBlanco : images.logo}
      alt="logo"
    />
  );

  if (redirect) {
    return <Link to="/">{logo}</Link>;
  }

  return logo;
};

Logo.defaultProps = {
  height: "150px",
  width: "200px",
  redirect: false,
  white: false,
};

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  redirect: PropTypes.bool,
  white: PropTypes.bool,
};

export default Logo;
