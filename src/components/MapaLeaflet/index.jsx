import React from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "./style";
import images from "../../data/images";

const MapaLeaftlet = ({ height, width, punto, basurales }) => {
  const createIcon = ({ icon, className }) => {
    return L.icon({
      iconUrl: icon,
      iconSize: [35, 35],
      className,
    });
  };

  return (
    <MapContainer
      height={height}
      width={width}
      center={
        punto?.coordenadas ||
        JSON.parse(import.meta.env.VITE_MAP_CENTER || [0, 0])
      }
      zoom={punto ? 16 : 13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {punto && (
        <Marker
          icon={createIcon({
            icon: images.basuralIcon,
            className: "--basural",
          })}
          position={punto.coordenadas}
          key={punto.coordenadas}
        >
          <Popup>{punto.direccion}</Popup>
        </Marker>
      )}
      {basurales?.map((basural) => {
        const icon = createIcon({
          icon: images.basuralIcon,
          className: "--basural",
        });

        return (
          <Marker
            icon={icon}
            position={basural.coordenadas}
            key={basural.direccion}
          >
            <Popup>{basural.direccion}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

MapaLeaftlet.defaultProps = {
  width: "",
  punto: null,
  basurales: [],
};

MapaLeaftlet.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string,
  punto: PropTypes.object,
  basurales: PropTypes.array,
};

export default MapaLeaftlet;
