import { cardMiddleware } from "./cardMiddleware";
import { saveCard } from "../actions/actions";
import { serverCard } from "./api";

jest.mock("./api", () => ({
  serverCard: jest.fn(() => true)
}));

describe("cardMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#SAVE_CARD", () => {
    it("saves card through api", async () => {
      serverCard.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await cardMiddleware({ dispatch })()(
        saveCard("cardNumber", "date", "cardholder", "cvc")
      );
      expect(serverCard).toBeCalledWith("cardNumber", "date", "cardholder", "cvc");
    });
  });
});
