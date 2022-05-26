import React, { Component } from "react";
import { HeaderWithAuth } from "../Header/Header";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  componentWillUnmount() {
    //требуется т.к. при первом рендере map = null
    this.map.remove && this.map.remove();
  }

  render() {
    const { navigateTo } = this.props;

    return (
      <>
        <HeaderWithAuth navigateTo={navigateTo} />
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer} />
        </div>
      </>
    );
  }
}

Map.propTypes = {
  navigateTo: PropTypes.func,
};

export { Map };
