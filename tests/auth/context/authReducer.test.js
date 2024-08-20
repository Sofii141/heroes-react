import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

//toEqual = se utiliza para verificar si el valor obtenido en la prueba es igual al valor esperado.
describe("Pruebas en authReducer", () => {
  /*
    esta prueba unitaria verifica que, cuando se llama al 
    reductor authReducer con un estado inicial y una acción vacía, 
    el estado resultante sea igual al estado inicial proporcionado. 
    Si el estado se mantiene sin cambios después de aplicar el reductor, 
    la prueba pasa. 
    */
  test("debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    //se está utilizando expect para verificar si el state resultante después de aplicar
    //el reductor coincide con {logged: false}.
    expect(state).toEqual({ logged: false });
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    //lo que mande el user
    const action = {
      type: types.login,
      payload: {
        name: "Sofi",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "sofi" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
