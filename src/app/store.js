import {configureStore} from "@reduxjs/toolkit";
import {nameReducer} from "../components/reducers/nameReducer";
import {movieReducer} from "../components/reducers/movieReducer";

let store = configureStore( {
    reducer: {nameReducer, movieReducer},
});

export default store;
