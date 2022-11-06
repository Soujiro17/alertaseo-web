import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  object-fit: contain;
  object-position: center; ;
`;

export default Img;
