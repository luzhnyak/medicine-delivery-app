import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { localReducer } from "./local/slice";
import { shopsReducer } from "./shops/slice";
import { productsReducer } from "./products/slice";
import { ordersReducer } from "./orders/slice";

const localConfig = {
  key: "local",
  storage,
  whitelist: ["favItems", "cartItems"],
};

const rootReducer = combineReducers({
  local: persistReducer(localConfig, localReducer),
  shops: shopsReducer,
  products: productsReducer,
  orders: ordersReducer,
});

const ignoredPersistenceActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredPersistenceActions,
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;