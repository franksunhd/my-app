import React, {Component} from "react";

// 定义Index
import Index from "../Index";
// Home
import Home from "../pages/Home/home";
import {Route} from "react-router";

const routes = [
    {path: '/index', component: Index},
    {path: '/index/basic', component: Home}
];

function pageRoutes() {
    routes.map(item => {
        return <Route key={item.path} path={item.path} component={item.component}/>
    });
}

export default routes;