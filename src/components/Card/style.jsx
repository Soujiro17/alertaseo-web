import styled from "styled-components";
import colors from "../../constants/colors";

const Card = styled.div`
  height: ${(props) => props.height || "fit-content"};
  width: ${(props) => props.width || "fit-content"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.white[0]};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  box-shadow: 1px 1px 3px 2px ${colors.black[1]};
  border-radius: 0.7rem;
  padding: 1rem;
`;

export default Card;
