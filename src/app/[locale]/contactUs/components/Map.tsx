"use client";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const defaultPosition: LatLngExpression = [
  32.794908369034026, 51.55131218208778,
];
function LocationMarker() {
  const icon = L.icon({
    iconSize: [34, 41],
    iconUrl: "icons/contactUs/Vector.png",
  });

  return (
    <Marker position={defaultPosition} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const Map = () => {
  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      scrollWheelZoom={false}
      attributionControl={false}
      className="w-full h-full bg-gray-20 z-10 rounded-xsm  "
    >
      <TileLayer
        className="bg-white stroke-gray-20 fill-white"
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
