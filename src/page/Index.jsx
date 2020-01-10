import React, {Component} from "react";
import Header from "./Header/Header";
import Side from "./Side/Side";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="indexBox">
                {/*头部*/}
                <Header/>
                {/*导航*/}
                <Side/>
            </div>
        )
    }
}

export default Index;