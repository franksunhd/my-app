// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import {createStore} from "redux";
// eslint-disable-next-line no-unused-vars
import TitleText from "../common/titleText";

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': // 自增
            return state + 1;
        case 'DECREMENT': // 自减
            return state - 1;
        default: // 原样输出
            return state;
    }
}

// 主渲染函数
function Redux_1() {
    let store = createStore(counter);
    store.subscribe(() => console.log(store.getState()));
    store.dispatch({type: 'INCREMENT'}); // 增 1
    store.dispatch({type: 'INCREMENT'}); // 增 2
    store.dispatch({type: 'DECREMENT'}); // 减 1

    return (
        <div className="padding20">

        </div>
    )
}

export default Redux_1;
