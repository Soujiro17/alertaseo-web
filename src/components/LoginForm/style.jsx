import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ForgetPassword = styled(Link)`
  margin: 0%;
  text-align: right;
  text-decoration: none;
  color: ${colors.black[5]};

  &:hover {
    color: ${colors.black[3]};
  }
`;
