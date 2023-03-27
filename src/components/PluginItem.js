import React from "react";

const PluginItem = ({ text, handler, origin }) => {
    const checkHandler = (event) => {
        handler(event.target.checked, origin);
        if (event.target.checked) {
        } else {
            console.log("Unchecked");
        }
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
};

export default PluginItem;
