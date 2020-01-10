// 引入React
import React from 'react';
import {Route, Redirect} from "react-router"
import {HashRouter} from "react-router-dom";
// 引入全局的css
import './assets/css/index.css';
import AllDom from './page/fix';
import Home from "./page/Home/home";

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

// 根节点渲染函数
function App() {
    return (
        <HashRouter basename={ROUTE_BASE_NAME}>
            <div className="appName">
                <Route path="/index" component={AllDom}/>
                {/*首页及路由重定向*/}
                <Route path="/" render={() => (
                    <Redirect to="/index"/>
                )}/>
            </div>
        </HashRouter>
    );
}

export default App;
