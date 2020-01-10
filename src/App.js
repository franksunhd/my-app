// 引入React
import React from 'react';
// 引入全局的css
import './assets/css/index.css';
// 引入路由
import Router from "./page/router/Router";

// 根节点渲染函数
function App() {
    return (
        <Router/>
    );
}

export default App;
