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

// 5. 组合 --- 包含关系
function GroupIncludeBox() {
    return (
        <div>
            <TitleText title="5. 组合 --- 包含关系"/>
            <GroupInclude color="red">
                <h1>标题</h1>
                <div>this is title!</div>
            </GroupInclude>
        </div>
    )
}

function GroupInclude(props) {
    // 使用 props.children
    return (
        <div className={'color_' + props.color}>
            {props.children}
        </div>
    )
}

// 6. 组合 --- 包含关系
function SplitPane(props) {
    return (
        <div>
            <TitleText title="6. 组合 --- 包含关系"/>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

// 7. 组合 --- 特例关系
class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // 输入框的change事件
    handleChange(e) {
        this.setState({text: e.target.value});
    }

    // 按钮点击事件
    handleClick() {
        alert('welcome to react,' + this.state.text);
    }

    render() {
        return (
            <div>
                <TitleText title="7. 组合 --- 特例关系"/>
                <SplitPane left={<div>标题</div>} right={<div>描述</div>}>
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>点击获取值</button>
                </SplitPane>
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

            {/* 5. 组合 --- 包含关系 */}
            <GroupIncludeBox/>

            {/* 6. 组合 --- 包含关系 */}
            <SplitPane left={<h1>我是左边</h1>} right={<h1>我是右边</h1>}/>

            {/* 7. 组合 --- 特例关系 */}
            <SignUpDialog/>
        </div>
    )
}

export default Core_2;