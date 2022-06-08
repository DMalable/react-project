import { card } from './card'
import { cardUpload, cardReset } from '../actions/actions'

describe("card", () => {
  describe("#LOAD", () => {
    it('uses properties', () => {
      expect(card({}, cardUpload())).toEqual({
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
