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
// 高级指引 上
import Senior_1 from "../pages/Basic/senior_1";
// 高级指引 下
import Senior_2 from "../pages/Basic/senior_2";

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
                    <Route path="/index/basic/senior_2" component={Senior_2}/>
                    <Route exact path="/index/advance" component={Advance}/>
                    <Route exact path="/index/senior" component={Senior}/>
                </div>
            </HashRouter>
        )
    }
}

export default RouterLink;