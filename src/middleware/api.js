export const serverLogIn = async (email, password) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((result) => result.success);
};

export const serverReg = async (email, password, name, surname = '-') => {
  return fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password, name: name, surname: surname }),
  })
    .then((response) => response.json())
    .then((result) => result.success);
};

export const serverCard = async (cardNumber, date, cardholder, cvc) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cardNumber: cardNumber, date: date, cardholder: cardholder, cvc: cvc }),
  })
    .then((response) => response.json())
    .then((result) => result.success);
};

export const serverAddrList = async () => {
  return fetch("https://loft-taxi.glitch.me/addressList")
    .then((response) => response.json())
    .then((result) => result.addresses);
};

export const serverRoute = async (fromAddress, toAddress) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${fromAddress}&address2=${toAddress}`)
    .then((response) => response.json())
    .then((result) => result);
};