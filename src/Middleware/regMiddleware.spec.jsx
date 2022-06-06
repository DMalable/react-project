import { regMiddleware } from "./regMiddleware";
import { registrate } from "../actions/actions";
import { serverReg } from "./api";

jest.mock("./api", () => ({
  serverReg: jest.fn(() => true)
}));

describe("regMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#REGISTRATE", () => {
    it("registrates through api", async () => {
      serverReg.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await regMiddleware({ dispatch })()(
        registrate("email", "password", "name", "surname")
      );
      expect(serverReg).toBeCalledWith("email", "password", "name", "surname");
    });
  });
});
