import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import petCardReducer from "./components/petCardSlice";

export default configureStore({
  reducer: {
    petCards: petCardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
