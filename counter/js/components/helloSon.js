import * as React from "react"

export default class inputView extends React.Component {
    constructor(props) {
        super(props);
        const ts = this
        this.state = {
            props: this.props
        }
    }
    // 只有es7才有静态属性，es6只有静态方法，所有要加入babel-state0转换规则
    static defaultProps = {
        name: "little Jack",
        timeStamp: new Date().getTime()
    }
    render() {
        const { increment, decrement } = this.props
        return (
            <input type="text" value={increment + decrement} />
        )
    }
}