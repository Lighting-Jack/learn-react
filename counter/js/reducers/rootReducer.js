import { combineReducers } from "redux"
import { utils, AopProxyMixin } from "../helpers/utils"
import {
    increment,
    decrement,
    fetchState
} from "./reducers"

export const rootReducer = combineReducers({
    increment,
    decrement,
    fetchState
})