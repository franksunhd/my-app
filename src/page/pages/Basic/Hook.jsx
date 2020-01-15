import React, {useState, useEffect} from "react";
import TitleText from "../common/titleText";

// 1. useState
function Example() {
    // Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

    // 声明一个新的叫做 "count" 的 state变量
    const [count, setCount] = useState(0);

    // 2. useEffect
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <TitleText title="1. useState"/>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

// 主渲染函数
function Hook() {
    return (
        <div className="padding20">
            {/* 1. useState */}
            <Example/>
        </div>
    )
}

export default Hook;
