import { addressList } from './addressList'
import { getAddressList } from '../actions/actions'

describe("addressList", () => {
  describe("#GET", () => {
    it('uses properties', () => {
      expect(addressList({}, getAddressList())).toEqual({
        addresses: undefined,
      })
    })
  })
})