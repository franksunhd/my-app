// 引入React
import React from "react";
// eslint-disable-next-line no-unused-vars
import menuList from "../../Side/menu";
import {NavLink} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
function MenuListArr(props) {
    // 获取菜单列表
    let list = props.listArr;
    let listChild = [];
    list.forEach(item => {
        if (window.location.hash.indexOf(item.url) !== -1) {
            item.children.forEach((val) => {
                listChild.push(val);
            });
        }
    });
    const listItem = listChild.map((item) => {
        return <li key={item.id}>
            <NavLink className="minMenu" activeClassName="is_active" to={item.url}>
                {item.label}
            </NavLink>
        </li>
    });
    return (
        <ul className="minMenuBox">{listItem}</ul>
    )
}

function Advance() {
    return (
        <div className="BasicBox">
            <MenuListArr listArr={menuList}/>
        </div>
    )
}

export default Advance;
