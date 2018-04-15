import { combineReducers } from "redux"
import { utils, AopProxyMixin } from "../helpers/utils"
import {
    increment,
    decrement,
    resetCounter
} from "./reducers"

export const rootReducer = combineReducers({
    increment,
    decrement,
    resetCounter
})