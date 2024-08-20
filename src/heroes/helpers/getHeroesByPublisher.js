import { heroes } from "../data/heroes";

// funcion que recibe como parametro un publisher, si encuentra el mandado
// retorna la lista de heroes filtrada, si no retorna un error de no encontrado
export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroes) => heroes.publisher === publisher);
};

