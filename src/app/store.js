import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "../components/reducers/movieReducer";

let store = configureStore( {
    reducer: {movieReducer},
});

export default store;
