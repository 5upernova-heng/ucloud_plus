import React, { useState, useEffect } from "react";

const PluginItem = ({ text, handler, origin, collapseTarget }) => {
    const [defaultValue, setDefaultValue] = useState(false);
    const checkHandler = (event) => {
        const value = event.target.checked;
        handler(value, origin);
        setDefaultValue(value);
        GM.setValue(text, value);
    };
    useEffect(() => {
        const getDefaultValue = async () => {
            const value = await GM.getValue(text, false);
            handler(value, origin);
            setDefaultValue(value);
        };
        getDefaultValue();
    }, []);
    return (
        <>
            <div className="dropdown-item dropstart d-flex align-items-center ms-0">
                <div
                    className="form-check form-switch"
                    style={{ maxWidth: "max-content" }}
                >
                    <input
                        className="form-check-input px-1"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        checked={defaultValue}
                        onChange={checkHandler}
                    />
                    <label
                        className="form-check-label"
                        data-bs-toggle="collapse"
                        data-bs-target={
                            collapseTarget ? `#${collapseTarget}` : ""
                        }
                    >
                        {text}
                    </label>
                </div>
            </div>
        </>
    );
};

export default PluginItem;
