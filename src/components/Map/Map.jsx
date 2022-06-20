import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { HeaderWithConnect } from "../Header/Header";
import { MapFormWithConnect } from "./MapForm";
// import { Button, Select, MenuItem } from "@material-ui/core";
// import { getRoute } from "../../actions/actions";
import { drawRoute } from "./drawRoute";

const Map = (props) => {

  // let map = null;
  let mapContainer = React.createRef();

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    map.on('load', () => {
      if (Array.isArray(props.route)) {
        drawRoute(map, props.route);
      }
    })

    return function cleanup() {
      map.remove && map.remove();
    };
  });

  //При наличии карты в профиле доступно окно заказа
  return (
    <>
      <HeaderWithConnect />
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={mapContainer} />
        <MapFormWithConnect />
      </div>
    </>
  );
}

Map.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const MapWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, route: state.route }),
)(Map);