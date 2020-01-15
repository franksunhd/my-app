import React, {Component} from "react";
import TitleText from "../common/titleText";

// 1. 组件的生命周期
class LifeCycle extends Component {
    /*  常用的生命周期
        1. 挂载
            constructor
            render
            componentDidMount
        2. 更新
            render
            componentDidUpdate
        3. 卸载
            componentWillUnmount
     */

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        console.log('---渲染---');
        return (
            <div>
                <TitleText title="1. 组件的生命周期"/>
                <div>
                    <p>1. 挂载</p>
                    <p>constructor</p>
                    <p>render</p>
                    <p>componentDidMount</p>

                    <p>2. 更新</p>
                    <p>render</p>
                    <p>componentDidUpdate</p>

                    <p>3. 卸载</p>
                    <p>componentWillUnmount</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('---挂载---');
        // 可以在此直接调用 setState
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('---更新---');
        // 可以在此直接调用 setState, 但是必须包裹在一个条件语句中
    }

    componentWillUnmount() {
        console.log('---卸载---');
        // 会在组件卸载及销毁之前直接调用
        // 不应该再调用 setState
    }
}

// 主渲染函数
function Senior_1() {
    return (
        <div className="padding20">
            {/* 1. 组件的生命周期 */}
            <LifeCycle/>
        </div>
    )
}

export default Senior_1;