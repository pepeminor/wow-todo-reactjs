// 'use client'
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
// import { todoReducer } from "./todo/todoSlice";

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// //   whitelist: ["todoSlice"],
// // };

// // const rootReducer = combineReducers({
// //   todoReducer,
// // });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     todoReducer
//   }
// });

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todoSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { sortByReducer } from "./sortBy/sortBySlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  todoReducer,
  sortByReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

let store;

store = configureStore({
  reducer: persistedReducer,
  middleware,
});

// if (typeof window === "undefined") {
//   store = configureStore({
//     reducer: rootReducer,
//     middleware,
//   });
// }

export const globalStore = store;
export const persistor = persistStore(store);
// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
