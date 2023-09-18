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
            <div>
                <div
                    style={{maxWidth: "max-content"}}
                >
                    <input
                        type="checkbox"
                        role="switch"
                        id={name}
                        checked={defaultValue}
                        onChange={checkHandler}
                    />
                    <label>{label}</label>
                </div>
            </div>
        </>
    );
};

export default PluginItem;
