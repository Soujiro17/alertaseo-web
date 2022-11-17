import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";

const ForgetPassword = styled(Link)`
  display: block;
  width: 100%;
  margin: 0%;
  text-align: right;
  text-decoration: none;
  color: ${colors.black[5]};
  transition: 0.2s all;

  &:hover {
    color: ${colors.primary};
  }
`;

export default ForgetPassword;
