import styled, { css } from "styled-components";
import colors from "../../constants/colors";

const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  height: ${(props) => props.height || "fit-content"};
  width: ${(props) => props.width || "fit-content"};
  gap: 1rem;
  ${(props) => (props.disableFlex ? "" : centerContent)}
  background-color: ${colors.white[0]};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  box-shadow: ${(props) =>
    props.disableBoxShadow ? "" : `1px 1px 5px 2px ${colors.black[1]}`};
  border-radius: 0.7rem;
  padding: 1rem;
  position: ${(props) => (props.absolute ? "absolute" : "relative")};
  z-index: 10;

  ${(props) =>
    props.activeHover
      ? `
    transition: .2s all;
    &:hover {
      transform: translateY(-.3rem);
    }
  `
      : ""}
`;

export default Card;
