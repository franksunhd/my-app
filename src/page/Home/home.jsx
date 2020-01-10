// 引入React
import React, {Component} from "react";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log(1111)
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Home;