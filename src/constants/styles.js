import { css } from "styled-components";
import colors from "./colors";

export const buttonInput = css`
  height: ${(props) => props.height || "2.5rem"};
  width: ${(props) => props.width};
  border-radius: 0.3rem;
  border: 1px solid ${colors.black[4]};
`

export const onHoverPrimary = css`
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    left: 0%;
    bottom: 0%;
    height: 0%;
    width: 100%;
    content: "";
    z-index: -1;
    transition: 0.2s all;
    background-color: ${colors.black[1]};
  }

  &:hover {
    color: ${colors.black[9]};
    &::before {
      height: 100%;
    }
  }
`