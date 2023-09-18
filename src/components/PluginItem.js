import React, {useCallback, useEffect, useState} from "react";

const PluginItem = ({plugin: {name, label, handler, pathReg}}) => {
    const [defaultValue, setDefaultValue] = useState(false);
    const checkHandler = (event) => {
        const value = event.target.checked;
        handler(value);
        setDefaultValue(value);
        GM.setValue(name, value);
    };
    const getDefaultValue = useCallback(async () => {
        const value = await GM.getValue(name, false);
        handler(value);
        setDefaultValue(value);
    }, [handler]);
    useEffect(() => {
        if (document.location.pathname.match(pathReg)) {
            getDefaultValue().then();
        }
    }, [document.location.pathname]);
    return (
        <>
            <div className="dropdown-item dropstart d-flex align-items-center ms-0">
                <div
                    className="form-check form-switch"
                    style={{maxWidth: "max-content"}}
                >
                    <input
                        className="form-check-input px-1"
                        type="checkbox"
                        role="switch"
                        disabled={!document.location.pathname.match(pathReg)}
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
