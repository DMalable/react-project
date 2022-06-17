import { route } from './route'
import { saveRoute } from '../actions/actions'

describe("route", () => {
  describe("#GET", () => {
    it('uses properties', () => {
      expect(route({}, saveRoute())).toEqual(
        undefined
      )
    })
  })
})