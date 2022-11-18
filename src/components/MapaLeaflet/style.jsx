import styled from "styled-components";
import { MapContainer as MC } from "react-leaflet";

export const MapContainer = styled(MC)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
