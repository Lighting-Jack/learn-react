// depend

import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { rootReducer } from "../reducers/rootReducer"
import { utils, AopProxyMixin } from "../helpers/utils"

const loggerMiddleware = createLogger()

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));

// 构建AOP代理实例
const proxyInst = {
    dispatch: AopProxyMixin(
        store.dispatch,
        (...args) => {
            utils.log("dispatch", "start", args[0].type)
        },
        (...args) => {
            utils.log("dispatch", "end", args[0].type)
        }
    ),
    subscribe: AopProxyMixin(store.subscribe, (...args) => {
        utils.log("subscribe initial")
    }),
    getState: AopProxyMixin(store.getState, (...args) => {
    })
}

module.exports = {
    dispatch: proxyInst.dispatch,
    subscribe: proxyInst.subscribe,
    getState: proxyInst.getState,
    store: store,
    utils: utils,
}

