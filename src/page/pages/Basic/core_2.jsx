import React, {Component} from "react";
// 引入标题组件
import TitleText from "../common/titleText";

// 状态提升
class StatusUp extends Component {
    // 构造函数
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="statusUp">
                <TitleText title="状态提升"/>
            </div>
        )
    }
}


// 主函数
function Core_2() {
    return (
        <div className="Core_2_Box padding20">
            <StatusUp/>
        </div>
    )
}

export default Core_2;