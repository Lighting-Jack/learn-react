import * as React from "react"
import { render } from "react-dom"
import helloSon from "./helloSon"

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            age: 21
        }
    }
    static defaultProps = {
        hobby: "fuck11",
        click() {
            console.log("hello123")
        }
    }
    render() {
        return (
            <helloSon
                age={this.state.age}
                {...this.props}
            ></helloSon>    
        )
    }
}
// Hello.defaultProps = {
//     hobby: "fuck"
// }
render(
    < Hello></Hello >,
    document.getElementById("example")
)