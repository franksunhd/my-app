// 引入React
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, HashRouter} from "react-router-dom";
// 引入全局的css
import './assets/css/index.css';
// eslint-disable-next-line no-unused-vars
import AllDom from './page/fix';

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

// 根节点渲染函数
function App() {
    return (
        <BrowserRouter basename={ROUTE_BASE_NAME}>
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative', minHeight: '100vh'}}>

            </div>
        </BrowserRouter>
    );
}

export default App;
