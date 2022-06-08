import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { HeaderWithConnect } from "../Header/Header";
import { getAddressList } from "../../actions/actions";



const Map = () => {

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

    //Загрузка списка доступных точек на карте
    getAddressList();

    //зачем нужна очистка карты?
    return function cleanup() {
      //требуется т.к. при первом рендере map = null?
      map.remove && map.remove();
    };
  });


  return (
    <>
      <HeaderWithConnect />
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={mapContainer} />
      </div>
    </>
  );
}

Map.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const MapWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn })
)(Map);