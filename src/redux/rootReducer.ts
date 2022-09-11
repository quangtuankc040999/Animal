import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "./account/reducer";
import animalReducer from "./animal/reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    animal: animalReducer
})

export default rootReducer