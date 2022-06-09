import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { HeaderWithConnect } from "../Header/Header";
import { Button, Select, MenuItem } from "@material-ui/core";
import { getAddressList, getRoute } from "../../actions/actions";

const Map = (props) => {

  // let map = null;
  let mapContainer = React.createRef();
  const addresses = props.addresslList;

  const getRoute = (event) => {
    event.preventDefault();
    const { fromAddress, toAddress } = event.target;
    console.log(fromAddress.value, toAddress.value);
    props.getRoute(fromAddress.value, toAddress.value);
  };

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    //Загрузка списка доступных точек на карте
    props.getAddressList();
    console.log(props.addresslList);
    //зачем нужна очистка карты?
    return function cleanup() {
      //требуется т.к. при первом рендере map = null?
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

  return (
    <>
      <HeaderWithConnect />
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={mapContainer} />
        <div className="route__modal">
          <form className="route__form" onSubmit={getRoute}>
            <div className="route__form-top">
              <Select name="fromAddress" value={addrFrom} onChange={handleChangeFrom} >
                {/* <MenuItem value={""}> Выберите адрес </MenuItem> */}
                <MenuItem value={"Эрмитаж"}> Эрмитаж </MenuItem>
                <MenuItem value={"Кинотеатр Аврора"}> Кинотеатр Аврора </MenuItem>
                <MenuItem value={"Мариинский театр"}> Мариинский театр </MenuItem>
                {/* {addresses.map((addr, index) => (<MenuItem key={index} value={addr}> {addr} </MenuItem>))} */}
              </Select>
              <Select name="toAddress" value={addrTo} onChange={handleChangeTo}>
                {/* <MenuItem value={""}> Выберите адрес </MenuItem> */}
                <MenuItem value={"Эрмитаж"}> Эрмитаж </MenuItem>
                <MenuItem value={"Кинотеатр Аврора"}> Кинотеатр Аврора </MenuItem>
                <MenuItem value={"Мариинский театр"} disabled> Мариинский театр </MenuItem>
                {/* {addresses.map((addr, index) => (<MenuItem key={index} value={addr}> {addr} </MenuItem>))} */}
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
}

Map.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const MapWithConnect = connect(
  // (state) => ({ isLoggedIn: state.auth.isLoggedIn, addresslList: state.addresslList }),
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { getAddressList, getRoute }
)(Map);