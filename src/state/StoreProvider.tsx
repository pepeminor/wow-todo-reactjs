"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, globalStore, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// import { makeStore, AppStore } from '../lib/store'



export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = globalStore;
  }

  // let persistor = persistStore(makeStore());

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
