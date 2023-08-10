import React from "react"
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const MapComponent = ({ style, dragging, tap }) => {
  const position = [53.14, 8.22]
  const tileLayer = {
    tiles: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
  const icon = L.icon({
    iconUrl: "/img/map/marker.svg",
    shadowUrl: "",
    iconRetinaUrl: "/img/map/marker.svg",
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19],
  })
  function Focus() {
    const map = useMapEvent({
      focus: () => {
        map.scrollWheelZoom.enable()
      },
      blur: () => {
        map.scrollWheelZoom.disable()
      },
    })
    return null
  }
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={style}
      dragging={dragging}
      tap={tap}
    >
      <Focus />
      <TileLayer url={tileLayer.tiles} attribution={tileLayer.attribution} />
      <Marker icon={icon} position={position}>
        <Popup className="map-custom-popup" maxWidth="600" minWidth="200">
          <div className="p-4">
            <h5>Info Window Content</h5>
            <p className="text-muted ">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
