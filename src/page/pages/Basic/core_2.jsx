import React, {Component} from "react";
// 引入标题组件
import TitleText from "../common/titleText";

const scaleNames = {
    c: 'Celsius(摄氏温度)',
    f: 'Fahrenheit(华氏温度)'
};

// 1. 状态提升 --- 静态判断水是否沸腾
class StatusUp extends Component {
    // 构造函数
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="statusUp">
                <TitleText title="1. 状态提升 --- 静态判断水是否沸腾"/>
                <BoilingVerdict celsius={1}/>
            </div>
        )
    }
}

// 判断水是否沸腾 并输出
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <h1>温度{props.celsius}{props.scale === 'f' ? '°F' : '°C'} ,水沸腾了</h1>
    } else {
        return <h1>温度{props.celsius}{props.scale === 'f' ? '°F' : '°C'}, 水没有沸腾</h1>
    }
}

// 2. 状态提升 --- 动态判断水是否沸腾
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    // 输入框 change 事件
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        let temperature = this.state.temperature;
        return (
            <div>
                <TitleText title="2. 状态提升 --- 动态判断水是否沸腾"/>
                <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                    <input value={temperature} onChange={this.handleChange}/>
                    <BoilingVerdict celsius={temperature !== '' ? parseFloat(temperature) : 0}/>
                </fieldset>
            </div>
        )
    }
}

// 封装判断温度的组件
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    // 输入框 change 事件
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        let temperature = this.state.temperature;
        let scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={temperature !== '' ? parseFloat(temperature) : 0}/>
            </fieldset>
        )
    }
}

// 3. 摄氏温度和华氏温度 --- 没有关联
class Temperature extends Component {
    render() {
        return (
            <div>
                <TitleText title="3. 摄氏温度和华氏温度"/>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        )
    }
}

// 封装 组件
class TempInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // 输入框的change事件
    handleChange(e) {
        // 组件内的输入框的change事件触发父组件的方法
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        let temperature = this.props.temperature;
        let scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

// 华氏温度转摄氏温度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 摄氏温度转华氏温度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 根据不同类型执行 回调函数 并 返回值
function tryConvert(temperature, convert) {
    // 转浮点型
    let input = parseFloat(temperature);
    // 如果是 NaN 类型
    if (Number.isNaN(input)) {
        return '';
    }
    // 执行回调函数
    let output = convert(input);
    // 精确值
    let rounds = Math.round(output * 1000) / 1000;
    return rounds.toString();
}

// 4. 摄氏温度和华氏温度 --- 关联
class TemperatureTogether extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    // 摄氏温度转换
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature: temperature})
    }

    // 华氏温度转换
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature: temperature})
    }

    render() {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        let celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        let fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TitleText title="4. 摄氏温度和华氏温度 --- 关联"/>
                {/* 调用摄氏温度类型 */}
                <TempInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <br/>
                {/*调用华氏温度类型*/}
                <TempInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict scale={scale} celsius={temperature !== '' ? parseFloat(temperature) : 0}/>
            </div>
        )
    }
}

// 主函数
function Core_2() {
    return (
        <div className="Core_2_Box padding20">
            {/* 1. 状态提升 --- 静态判断水是否沸腾 */}
            <StatusUp/>

            {/* 2. 状态提升 --- 动态判断水是否沸腾 */}
            <Calculator/>

            {/* 3. 摄氏温度和华氏温度 --- 没有关联 */}
            <Temperature/>

            {/* 4. 摄氏温度和华氏温度 --- 关联 */}
            <TemperatureTogether/>
        </div>
    )
}

export default Core_2;