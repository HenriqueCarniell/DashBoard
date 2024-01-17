import { combineReducers } from "redux"

import ErrorReducer from "./error/reducer"

const RootReducer = combineReducers({ErrorReducer});

export default RootReducer