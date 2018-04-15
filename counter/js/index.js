import * as React from "react"
import { connect, Provider } from "react-redux"
import { render } from "react-dom"
import { store } from "./store/createStore"
import App from "./container/app"

/**
 * react最顶级组件
 * @这里用不用provider都可以，provider的作用是生成顶级组件，并把store通过context向下传播
 * @根据connect源码，connect组件的store获取来源为props.store或context.store，从这个角度看，用不用provider都是可以的，并且context作为不稳定api，用provider存在一定风险
 */
export class Index extends React.Component {
    render() {
        return (
            <App store={store}></App>
        )
    }
}

render(
    <Index></Index>,
    document.getElementById("example")
)