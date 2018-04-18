import * as React from "react"
import { utils } from "../helpers/utils"

export default class tipsView extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        utils.log("TipsView", "Didmount", this.props)
    }
    render() {
        utils.log("Tipsview", "render", this.props)
        return (
            <div>
                我就测试一下
            </div>
        )
    }
}