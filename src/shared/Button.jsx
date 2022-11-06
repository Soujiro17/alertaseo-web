import styled from "styled-components";
import colors from "../constants/colors";
import { buttonInput, onHoverPrimary } from "../constants/styles";

const Button = styled.button`
  ${buttonInput}

  background-color: ${colors.universidad.primary};
  color: ${colors.universidad.white};

  ${onHoverPrimary}

  &::before {
    border-radius: 0.3rem;
  }

  cursor: pointer;
`;

export default Button;
