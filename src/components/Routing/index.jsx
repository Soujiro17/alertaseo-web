import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

const Routing = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(-33.04583625485238, -71.61343901665126),
        L.latLng(-33.030678984504725, -71.6325121031592),
      ],
      routeWhileDragging: false,
    }).addTo(map);

    // eslint-disable-next-line consistent-return
    return () => {
      map.removeControl(routingControl);
    };
  }, [map]);

  return null;
};

export default Routing;
