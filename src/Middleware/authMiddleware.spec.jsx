import { authMiddleware } from "./authMiddleware";
import { authenticate, registrate, saveCard } from "../actions/actions";
import { serverLogIn, serverReg, serverCard } from "./api";

jest.mock("./api", () => ({
  serverLogIn: jest.fn(() => true),
  serverReg: jest.fn(() => true),
  serverCard: jest.fn(() => true)
}));



describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#AUTHENTICATE", () => {
    describe("with correct credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(async () => true);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("testlogin", "testpassword")
        );
        expect(serverLogIn).toBeCalledWith("testlogin", "testpassword");
        //Не понятно, откуда взялся
        expect(dispatch).toBeCalledWith({
          type: "LOG_IN",
        });
      });
    });
    describe("with wrong credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(() => false);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("testlogin", "testpassword")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
  describe("#REGISTRATE", () => {
    // describe("with correct credentials", () => {
    it("registerates through api", async () => {
      serverReg.mockImplementation(async () => true);
      // const console = jest.fn();

      await authMiddleware()()(
        registrate("testemail", "testpassword", "testname", "testsurname")
      );
      expect(serverReg).toBeCalledWith("testemail", "testpassword", "testname", "testsurname");
      //Как еще нужно проверить? 
      // expect().toBeCalled();
    });
    // });
  });
  describe("#SAVE_CARD", () => {
    // describe("with correct credentials", () => {
    it("saves card through api", async () => {
      serverCard.mockImplementation(async () => true);
      // const console = jest.fn();

      await authMiddleware()()(
        saveCard("cardNumber", "date", "cardholder", "cvc")
      );
      expect(serverCard).toBeCalledWith("cardNumber", "date", "cardholder", "cvc");
      //Как еще нужно проверить? 
      // expect().toBeCalled();
    });
    // });
  });
});
