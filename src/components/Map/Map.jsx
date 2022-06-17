import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { HeaderWithConnect } from "../Header/Header";
import { Button, Select, MenuItem } from "@material-ui/core";
import { getAddressList, getRoute } from "../../actions/actions";
import { drawRoute } from "./drawRoute";

const Map = (props) => {

  // let map = null;
  let mapContainer = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fromAddress, toAddress } = event.target;
    props.getRoute(fromAddress.value, toAddress.value);
  };

  if (!props.addressList.length) {
    //Загрузка списка доступных точек на карте
    props.getAddressList();
  }

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

  const [addrFrom, setAddrFrom] = React.useState('');
  const handleChangeFrom = (event) => {
    setAddrFrom(event.target.value);
  };
  const [addrTo, setAddrTo] = React.useState('');
  const handleChangeTo = (event) => {
    setAddrTo(event.target.value);
  };

  //При наличии карты в профиле доступно окно заказа
  if (props.cardNumber) {
    return (
      <>
        <HeaderWithConnect />
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={mapContainer} />
          <div className="route__modal">
            <form className="route__form" onSubmit={handleSubmit}>
              <div className="route__form-top">
                <Select name="fromAddress" value={addrFrom} onChange={handleChangeFrom} >
                  {/* отфильтрован адрес прибытия */}
                  {props.addressList.map((addr, index) => ((addr !== addrTo) && <MenuItem key={index} value={addr}> {addr} </MenuItem>))}
                </Select>
                <Select name="toAddress" value={addrTo} onChange={handleChangeTo}>
                  {/* отфильтрован адрес отправления */}
                  {props.addressList.map((addr, index) => ((addr !== addrFrom) && <MenuItem key={index} value={addr}> {addr} </MenuItem>))}
                </Select>
              </div>
              <div className="route__form-bottom">
                <Button data-testid="submit" type="submit" variant="contained" color="primary">Заказать</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <HeaderWithConnect />
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={mapContainer} />
        </div>
      </>
    );
  }
}

Map.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const MapWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, route: state.route, addressList: state.addressList, cardNumber: state.card.cardNumber }),
  { getAddressList, getRoute }
)(Map);