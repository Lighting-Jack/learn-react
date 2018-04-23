// depend

import * as React from "react"
import { render } from "react-dom"
import { connect, Provider } from "react-redux"

import InputView from "../components/inputView"
import TipsView from "../components/tipsView"
import store from "../store/createStore"
const utils = store.utils;

/**
 * redux-container component 容器组件
 * @负责业务逻辑
 * @负责和redux进行交互,并提供回调等给展示组件，以便展示组件与view交互
 */
class App extends React.Component {
    constructor() {
        super();
        const ts = this;
        // 初始化state
        this.state = {
            age: 21,
            click() {
                store.dispatch({ type: 'DECREMENT' })
            }
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        utils.log("App", "Didmount", this.props)
    }
    // 只有es7才有静态属性，es6只有静态方法，所有要加入babel-state0转换规则
    static defaultProps = {
        increCb() {
            store.dispatch((dispatch) => {
                return dispatch({ type: 'INCREMENT' })
            })
        },
        decreCb() {
            store.dispatch({ type: 'DECREMENT' })
        },
        reset() {
            store.dispatch({ type: 'RESET_COUNTER' })
        },
        fetch() {
            store.dispatch({ type: 'FETCH_START' })
        }
    }
    render() {
        utils.log("App", "render", this.props)
        return (
            <div>
                <InputView
                    {...this.props}
                ></InputView>
                <button onClick={this.props.increCb.bind(this)}>+</button>
                <button onClick={this.props.decreCb}>-</button>
                <button onClick={this.props.reset}>reset</button>
                <button onClick={this.props.fetch}>fetch</button>
                <TipsView></TipsView>
                <div className="bfc-content">
                    <div className="float-l">Test</div>
                </div>
            </div>
        )
    }
}

// 可以手动订阅更新，也可以事件绑定到视图层。
const unsubscribe = store.subscribe(() => {
    utils.log("subscribe callback")
});

/**
 * redux-connect模块
 * @将展示组件和redux（store）进行连接，生成容器组件
 * @获取store来源可以是props.store或context.store
 * @内部使用shouldComponentUpdate作了性能优化，当props/state改变时才会触发render
 * 
 * @param mapStateToProps 将store的内容粘贴到props上
 * @param mapDispatchToProps 将store.dispatch粘贴到propx上
 * @param mergeProps 待了解...
 */
const mapStateToProps = (state) => {
    return {
        increment: state.increment,
        decrement: state.decrement
    }
}
const mapDispatchToProps = dispatch => Object.assign({},
    { dispatch }
);
export default connect(mapStateToProps, mapDispatchToProps)(App)