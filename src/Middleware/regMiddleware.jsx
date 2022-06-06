import { REGISTRATE } from "../actions/actions";
import { serverReg } from './api'

export const regMiddleware = () => (next) => async (action) => {
  if (action.type === REGISTRATE) {
    const { email, password, name, surname } = action.payload;
    const success = await serverReg(email, password, name, surname)
    if (success) {
      console.log("Регистрация выполнена!")
    }
  } else {
    next(action);
  }
};
