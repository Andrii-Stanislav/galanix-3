import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  persistConfig,
  middleware,
} from './persistConfig';

import { userChoiceReducer } from './userChoice/userChoice';

const persistedReducer = persistReducer(persistConfig, userChoiceReducer);

const reducer = {
  userChoice: persistedReducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
