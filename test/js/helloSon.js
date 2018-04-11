class helloSon extends React.Component {
    constructor() {
        super();
    }
    static defaultProps = {
        hobby: "fuck11",
        click() {
            console.log("hello123")
        }
    }
    render() {
        return (
            <div
                onClick={this.props.click}
            >{this.props.age}的我的hobby是{this.props.hobby}</div>
        )
    }
}