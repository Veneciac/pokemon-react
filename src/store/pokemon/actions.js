import ACTIONS from './actionTypes';

const addPokemon = pokemon => {
  return {
    type: ACTIONS.ADD_POKEMON,
    payload: pokemon,
  };
};

const releasePokemon = nickname => {
  return {
    type: ACTIONS.RELEASE_POKEMON,
    payload: nickname,
  };
};

export {
  addPokemon,
  releasePokemon
};