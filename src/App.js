// 引入React
import React from 'react';
import {Route, Redirect} from "react-router"
import {HashRouter} from "react-router-dom";
// 引入全局的css
import './assets/css/index.css';
import Index from './page/Index';
// eslint-disable-next-line no-unused-vars
import Fix from "./page/fix";
// eslint-disable-next-line no-unused-vars
import Home from "./page/Home/home";

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

// 根节点渲染函数
function App() {
    return (
        <HashRouter basename={ROUTE_BASE_NAME}>
            <div className="appName">
                <Route exact path="/">
                    <Redirect to="/index"/>
                </Route>
                <Route path="/index" component={Index}/>
            </div>
        </HashRouter>
    );
}

export default App;
