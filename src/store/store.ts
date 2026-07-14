import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import contactFormReducer from "./slices/contactFormSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      nav: navReducer,
      contactForm: contactFormReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
