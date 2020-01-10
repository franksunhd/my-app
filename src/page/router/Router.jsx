import React, {Component} from "react";
// 引入路由及重定向
import {Redirect, Route, Switch} from "react-router";
// BrowserRouter:不带 /#/    HashRouter:带/#/
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, HashRouter} from "react-router-dom";
// 引入路由文件
import Fix from "../fix"
import Index from "../Index";
import Home from "../pages/Home/home";

import routerList from "../router/page_Routes"

// 直接挂载到域名根目录
export const ROUTE_BASE_NAME = process.env.BASE_NAME || '';

class Router extends Component {

    render() {
        return (
            <HashRouter basename={ROUTE_BASE_NAME}>
                <div className="appName">
                    <Route path="/">
                        <Redirect to="/index"/>
                    </Route>
                    <Route path="/index" component={Index}/>
                    <Route exact path="/index/basic" component={Fix}/>
                    <Route exact path="/index/advance" component={Home}/>
                    <Route exact path="/index/senior" component={Fix}/>
                </div>
            </HashRouter>
        )
    }
}

export default Router;