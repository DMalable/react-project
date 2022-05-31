import React, { useEffect, useContext } from "react";
import Header from "../Header/Header";
import mapboxgl from "mapbox-gl";
// import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";


const Map = () => {
  const authData = useContext(AuthContext);
  const { isLoggedIn } = authData;

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

    //зачем нужна очистка карты?
    return function cleanup() {
      //требуется т.к. при первом рендере map = null?
      map.remove && map.remove();
    };
  });

  // const { navigateTo } = props;

  return (
    <>
      {/* <Header navigateTo={navigateTo} /> */}
      <Header />
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={mapContainer} />
      </div>
    </>
  );
}

// Map.propTypes = {
//   navigateTo: PropTypes.func,
// };

export default Map;
