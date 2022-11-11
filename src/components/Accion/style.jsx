import styled from "styled-components";
import colors from "../../constants/colors";

const Circulo = styled.div`
  min-height: 1rem;
  min-width: 1rem;
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s all;

  &.edit {
    background-color: ${colors.universidad.primary};
  }

  &.delete {
    background-color: ${colors.red};
  }

  &.go {
    background-color: ${colors.green};
  }

  &:hover {
    background-color: ${colors.white[3]};
  }
`;

export default Circulo;
