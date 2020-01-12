import React, {Component} from "react";
// 引入标题组件
import TitleText from "../common/titleText";

// 1. 状态提升
class StatusUp extends Component {
    // 构造函数
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="statusUp">
                <TitleText title="1. 状态提升"/>
                <BoilingVerdict celsius={1}/>
            </div>
        )
    }
}

// 判断水是否沸腾
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <h1>温度{props.celsius}° ,水沸腾了</h1>
    } else {
        return <h1>温度{props.celsius}°, 水没有沸腾</h1>
    }
}

// 2. 动态判断水是否判断
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        let temperature = this.state.temperature;
        return (
            <div>
                <TitleText title="2. 动态判断水是否判断"/>
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                    <input value={temperature} onChange={this.handleChange}/>
                    <BoilingVerdict celsius={temperature !== '' ? parseFloat(temperature) : 0}/>
                </fieldset>
            </div>
        )
    }
}


// 主函数
function Core_2() {
    return (
        <div className="Core_2_Box padding20">
            {/* 1. 状态提升 */}
            <StatusUp/>

            {/* 2. 动态判断水是否沸腾 */}
            <Calculator/>
        </div>
    )
}

export default Core_2;