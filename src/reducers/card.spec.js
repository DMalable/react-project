import card from './card'
import { cardLoad, cardReset } from '../actions/actions'

describe("card", () => {
  describe("#LOAD", () => {
    it('uses properties', () => {
      expect(card({}, cardLoad())).toEqual({
        cardNumber: undefined,
        date: undefined,
        cardholder: undefined,
        cvc: undefined
      })
    })
  })

  describe("#RESET", () => {
    it('resets info', () => {
      expect(card({}, cardReset())).toEqual({
        cardNumber: "",
        date: "",
        cardholder: "",
        cvc: ""
      })
    })
  })
})
