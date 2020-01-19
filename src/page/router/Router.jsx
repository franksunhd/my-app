import React, {Component} from "react";
// 引入路由及重定向
// eslint-disable-next-line no-unused-vars
import {Redirect, Router, Route, Switch} from "react-router";
// BrowserRouter:不带 /#/    HashRouter:带/#/
// eslint-disable-next-line no-unused-vars
import {HashRouter} from "react-router-dom";
// 引入路由文件
// eslint-disable-next-line no-unused-vars
import Index from "../Index";
// Home
import Home from "../pages/Home/home";
// Basic
import Basic from "../pages/Basic/basic"
// Advance
import Advance from "../pages/Advance/advance";
// Senior
import Senior from "../pages/Senior/Senior";
// 核心概念 上
import Core_1 from "../pages/Basic/core_1";
// 核心概念 下
import Core_2 from "../pages/Basic/core_2";
// 高级指引
import Senior_1 from "../pages/Basic/senior_1";
// Hook
import Hook from "../pages/Basic/Hook";
// ant 1
import ANT_1 from "../pages/Advance/ant_1";
// ant 2
import ANT_2 from "../pages/Advance/ant_2";
// Redux
import Redux_1 from "../pages/Senior/redux_1";

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

class RouterLink extends Component {
    render() {
        return (
            <HashRouter basename={ROUTE_BASE_NAME}>
                <div className="appName">
                    <Route path="/" component={Index}/>
                    <Route exact path="/index/home" component={Home}/>
                    <Route path="/index/basic" component={Basic}/>
                    <Route path="/index/basic/core_1" component={Core_1}/>
                    <Route path="/index/basic/core_2" component={Core_2}/>
                    <Route path="/index/basic/senior_1" component={Senior_1}/>
                    <Route path="/index/basic/hook" component={Hook}/>
                    <Route path="/index/advance" component={Advance}/>
                    <Route path="/index/advance/ant_1" component={ANT_1}/>
                    <Route path="/index/advance/ant_2" component={ANT_2}/>
                    <Route path="/index/senior" component={Senior}/>
                    <Route path="/index/senior/redux_1" component={Redux_1}/>
                </div>
            </HashRouter>
        )
    }
}

export default RouterLink;
