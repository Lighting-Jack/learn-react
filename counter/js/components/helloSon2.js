import * as React from "react"

export default class HelloSon2 extends React.Component {
    constructor() {
        super();
    }
    static defaultProps = {
        age: 23,
        name: "little Jack",
        timeStamp: new Date().getTime(),
        test: function () {
            setTimeout(() => {
                console.log("tik tok")
            }, 0)
            console.log("time out")
        }
    }
    render() {
        console.log("HelloSon2")
        return (
            <div
            >
                {this.props.timeStamp}
            </div>
        )
    }
}