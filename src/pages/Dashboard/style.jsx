import styled from "styled-components";
import colors from "../../constants/colors";
import Img from "../../shared/Img";

export const Title = styled.h2`
  font-size: calc(1.6rem + 1vw);
  color: ${colors.universidad.primary};
  margin-top: 0%;
`;

export const Descripcion = styled.p`
  text-align: justify;
  margin-top: calc(1.7rem + 1vw);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export const CardImg = styled(Img)`
  width: 100%;
  height: 10rem;
`;
