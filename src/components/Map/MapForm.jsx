import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Select, MenuItem } from "@material-ui/core";
import { getAddressList, getRoute } from "../../actions/actions";

const MapForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fromAddress, toAddress } = event.target;
    props.getRoute(fromAddress.value, toAddress.value);
  };

  if (!props.addressList.length) {
    //Загрузка списка доступных точек на карте
    props.getAddressList();
  }

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
    );
  }
}

MapForm.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const MapFormWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, addressList: state.addressList, cardNumber: state.card.cardNumber }),
  { getAddressList, getRoute }
)(MapForm);