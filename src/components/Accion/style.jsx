import styled from "styled-components";

const Circulo = styled.div`
  min-height: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  cursor: pointer;

  &.edit {
    background-color: blue;
  }

  &.delete {
    background-color: red;
  }

  &.go {
    background-color: green;
  }
`;

export default Circulo;
