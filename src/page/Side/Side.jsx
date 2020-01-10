import React, {Component} from "react";
import menuList from "./menu";
// eslint-disable-next-line no-unused-vars
import {Link, NavLink} from "react-router-dom";

// 获取导航
function MenuList(props) {
    const list = props.list;
    const listItem = list.map((item) => {
        return <div key={item.id}>
            <NavLink className="navMenu" activeClassName="is_active" to={item.url}>
                {item.label}
            </NavLink>
        </div>
    });
    return (
        <div className="sideMenu">{listItem}</div>
    );
}

// 导航渲染类
class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sideBox">
                {/*渲染列表 menuList 菜单数据 */}
                <MenuList list={menuList}/>
            </div>
        )
    }
}

export default Side;