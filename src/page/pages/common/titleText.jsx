import React from "react";

class TitleText extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="titleText">{this.props.title}</div>
        )
    }
}

export default TitleText;