import React, { Component } from "react";

class PluginItem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: false, text: "" };
    }
    async componentDidMount() {
        const { text, handler, origin } = this.props;
        const value = await GM.getValue(text, false);
        handler(value, origin);
        this.setState({ value });
    }
    render() {
        const { text, handler, origin } = this.props;
        const checkHandler = (event) => {
            const value = event.target.checked;
            console.log(value);
            handler(value, origin);
            this.setState({ value });
            GM.setValue(text, value);
        };
        return (
            <>
                <div className="dropdown-item">
                    <div
                        className="form-check form-switch"
                        style={{ maxWidth: "max-content" }}
                    >
                        <input
                            className="form-check-input px-1"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={this.state.value}
                            onChange={checkHandler}
                        />
                        <label
                            className="form-check-label"
                            for="flexSwitchCheckDefault"
                        >
                            {text}
                        </label>
                    </div>
                </div>
            </>
        );
    }
}

export default PluginItem;
