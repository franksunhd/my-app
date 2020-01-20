// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import TitleText from "../common/titleText";
import {Breadcrumb, Icon, Menu} from "antd";

// 1. Affix 固钉
class AffixBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    // 修改值
    tick() {
        let lastTime = new Date('2020-01-20 18:30:00').getTime();
        let nowDate = new Date().getTime();
        let a = lastTime - nowDate;
        let allTime = parseInt(a / 1000);
        if (allTime <= 0) {
            clearInterval(this.timeID);
            return;
        }
        this.setState({text: allTime + 's'});
    }

    render() {

        return (
            <div>
                <TitleText title="1. Affix 固钉"/>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

// 2. Breadcrumb 面包屑
class BreadcrumbBox extends Component {
    render() {

        // 下拉菜单选项
        const menu = (
            <Menu>
                <Menu.Item>第一项</Menu.Item>
                <Menu.Item>第二项</Menu.Item>
                <Menu.Item>第三项</Menu.Item>
            </Menu>
        );

        return (
            <div>
                <TitleText title="2. Breadcrumb 面包屑"/>
                <div>
                    <h3>基本用法</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/">个人中心</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <h3>带有图标</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <Icon type="home"/>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Icon type="user"/>
                            <span>用户管理</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <h3>带有下拉菜单</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item overlay={menu}>
                            <Icon type="user"/>
                            <span>下拉</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}

// 主渲染函数
function ANT_2() {
    return (
        <div className="padding20">
            {/* 1. Affix 固钉 */}
            <AffixBox/>

            {/* 2. Breadcrumb 面包屑 */}
            <BreadcrumbBox/>
        </div>
    )
}

export default ANT_2;
