import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {compose, applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import Pokemon from './pokemon/reducer';

const rootReducer = combineReducers({
  pokemon: Pokemon,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

