import { types } from "../../../src/auth/types/types";

describe("Pruebas en types.js", () => {

  test("Debe regresas estos types", () => {
    expect(types).toEqual({
      login: "[Auth Login]",
      logout: "[Auth Logout]",
    });
  });

});
