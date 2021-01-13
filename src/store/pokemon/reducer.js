import ACTIONS from './actions';

const initialState = {};

const setMyPokemon = (state, payload) => {
  let newState = JSON.parse(JSON.stringify(state));
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.SET_MY_POKEMON:
    return setMyPokemon(state, action.payload);
  default:
    return state;
  }
};

export default reducer;
