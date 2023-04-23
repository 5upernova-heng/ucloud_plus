import React, { useState, useEffect } from "react";

const PluginItem = ({ plugin: { name, label, handler } }) => {
    const [defaultValue, setDefaultValue] = useState(false);
    const checkHandler = (event) => {
        const value = event.target.checked;
        handler(value);
        setDefaultValue(value);
        GM.setValue(name, value);
    };
    useEffect(() => {
        const getDefaultValue = async () => {
            const value = await GM.getValue(name, false);
            handler(value);
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
                        id={name}
                        checked={defaultValue}
                        onChange={checkHandler}
                    />
                    <label className="form-check-label">{label}</label>
                </div>
            </div>
        </>
    );
};

export default PluginItem;
