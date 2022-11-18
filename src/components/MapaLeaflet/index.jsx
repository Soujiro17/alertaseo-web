import React from "react";
import PropTypes from "prop-types";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "./style";

const MapaLeaftlet = ({ height, width }) => {
  return (
    <MapContainer
      height={height}
      width={width}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

MapaLeaftlet.defaultProps = {
  width: "",
};

MapaLeaftlet.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default MapaLeaftlet;
