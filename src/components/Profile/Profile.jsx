import React, { useState } from "react";
import { HeaderWithConnect } from "../Header/Header";
import { Button, Input, FormLabel, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { connect } from "react-redux";
import { saveCard } from "../../actions/actions";

const Profile = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const saveCard = (event) => {
    event.preventDefault();
    const { cardNumber, date, cardholder, cvc } = event.target;
    props.saveCard(cardNumber.value, date.value, cardholder.value, cvc.value);
  };

  return (
    <>
      <HeaderWithConnect />
      <div className="profile">
        <div className="profile__modal">
          <form className="profile__form" onSubmit={saveCard}>
            <FormLabel>Профиль</FormLabel>
            <div className="profile__form-descr">Введите платежные данные</div>
            <div className="profile__form-container">
              <div className="profile__form-inputs">
                <InputLabel htmlFor="cardholder" >Имя владельца</InputLabel>
                <Input
                  id="cardholder"
                  type="text"
                  name="cardholder"
                  variant="contained"
                  color="primary"
                  helpertext="Как Вас зовут?"
                  required
                />
                <InputLabel htmlFor="card-number">Номер карты</InputLabel>
                <Input id="card-number" type="text" name="cardNumber" variant="contained" color="primary" required />
                <div className="profile__form-row">
                  <div className="profile__form-unit">
                    <InputLabel htmlFor="date">MM/YY</InputLabel>
                    <DatePicker
                      disablePast
                      animateYearScrolling
                      autoOk
                      variant="inline"
                      format="MM/yy"
                      views={["month", "year"]}
                      value={selectedDate}
                      onChange={handleDateChange}
                      name="date"
                    />
                  </div>
                  <div className="profile__form-unit">
                    <InputLabel htmlFor="cvc">CVC</InputLabel>
                    <Input id="cvc" type="number" name="cvc" variant="contained" color="primary" required />
                  </div>
                </div>
              </div>
              <div className="profile__form-card card">
                <img src="#" alt="логотип лофт" className="card__logo-loft"></img>
                <span>12/12</span>
                <div>1234 1234 1234 1234</div>
                <img src="#" alt="иконка карты" className="card__icon-card"></img>
                <img src="#" alt="логотип платежной системы" className="card__logo-pay"></img>
              </div>
            </div>
            <div className="profile__button-container">
              <Button className="profile__form-button" data-testid="submit" type="submit" variant="contained" color="primary" display="block">
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = {
  saveCard: PropTypes.func,
};

export const ProfileWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { saveCard }
)(Profile);
