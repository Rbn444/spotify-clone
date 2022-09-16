import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers"; // basta puntare la cartella
// dove è contenuto il file index.js

const store = configureStore({
    reducer: mainReducer,
});

export default store;
