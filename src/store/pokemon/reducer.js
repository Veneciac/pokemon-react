import ACTIONS from './actionTypes';

const initialState = { list: [], };

const addPokemon = (state, payload) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.list.push(payload);
  return newState;
};

const releasePokemon = (state, payload) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.list = newState.list.filter(pokemon => pokemon.nickname !== payload);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.ADD_POKEMON:
    return addPokemon(state, action.payload);
  case ACTIONS.RELEASE_POKEMON:
    return releasePokemon(state, action.payload);
  default:
    return state;
  }
};

export default reducer;
