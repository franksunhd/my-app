// 引入React
import React from 'react';
// 引入路由
import RouterLink from "./page/router/Router";
// 引入 ant Design
import {ConfigProvider} from "antd";
// 由于 ant 组件的默认文案是英文，所以需要修改为中文
import zh_CN from "antd/lib/locale-provider/zh_CN";
// 引入ant 的样式
import 'antd/dist/antd.css';
// 引入全局的css
import './assets/css/index.css';

// 根节点渲染函数
function App() {
    return (
        /*
         * autoInsertSpaceInButton
         *      true:按钮文字中间有空格
         *      false:按钮中间没有空格
         */
        <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
            <RouterLink/>
        </ConfigProvider>
    );
}

export default App;
