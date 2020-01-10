import React, {Component} from "react";
import menuList from "./menu";
import {Link} from "react-router-dom";

// 获取导航
function MenuList(props) {
    const list = props.list;
    const listItem = list.map((item, index) => {
        return <li key={item.id}>
            <Link to={item.url}>{item.label}</Link>
        </li>
    });
    return (
        <ul>{listItem}</ul>
    );
}

// 导航渲染类
class Side extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sideBox">
                <MenuList list={menuList}/>
            </div>
        )
    }
}

export default Side;