import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="headerBox">
                <h1>
                    <Link to="/index/home">React Header</Link>
                </h1>
            </div>
        )
    }
}

export default Header;