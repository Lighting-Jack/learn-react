/**
 * reducers
 * @param {*} state 对应于本reducer的state
 * @param {*} action 接收到的action
 * 
 * @本项目比较小型，暂时不使用actionCreator来创建actions，仅采用手写的方式
 */

export const increment = function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'RESET_COUNTER':
            return 0;
        default:
            return state;
    }
}

export const decrement = function (state = 0, action) {
    switch (action.type) {
        case 'DECREMENT':
            return state - 1;
        case 'RESET_COUNTER':
            return 0;
        default:
            return state;
    }
}

/**
 * 反面教材，在reducer中修改state
 * @param {*} state 
 * @param {*} action 
 */
export const fetchState = function (state = {}, action) {
    switch (action.type) {
        case 'FETCH_START':
            state.isFetch = true
            return state;
        default:
            return state;
    }
}