import React, {Component} from "react";
// 引入路由及重定向
// eslint-disable-next-line no-unused-vars
import {Redirect, Route, Switch} from "react-router";
// BrowserRouter:不带 /#/    HashRouter:带/#/
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, HashRouter} from "react-router-dom";
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
import Senior from "../pages/Senior/Senior"

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

class Router extends Component {
    render() {
        return (
            <HashRouter basename={ROUTE_BASE_NAME}>
                <div className="appName">
                    <Route path="/" component={Index}/>
                    <Route path="/">
                        <Redirect from="/*" to="/index/home"/>
                    </Route>
                    <Route exact path="/index/home" component={Home}/>
                    <Route exact path="/index/basic" component={Basic}/>
                    <Route exact path="/index/advance" component={Advance}/>
                    <Route exact path="/index/senior" component={Senior}/>
                </div>
            </HashRouter>
        )
    }
}

export default Router;