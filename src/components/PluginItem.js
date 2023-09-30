import React, {useEffect} from "react";
import {useStoreState} from "../utils/hooks";

const PluginItem = ({plugin: {name, label, handler, pathReg}}) => {
    const [enable, setEnable] = useStoreState(name, false);
    useEffect(() => {
        GM.getValue(name, false).then(
            (value) => {
                if (value) handler();
                setEnable(value);
            }
        );
    }, [])
    useEffect(() => {
        if (document.location.pathname.match(pathReg)) {
            handler(enable)
        }
    }, [document.location.pathname, enable]);
    return (
        <div className={`p-2 rounded-lg flex justify-between items-center border border-white 
            ${enable ? "hover:border-green-500" : "hover:border-gray-500"}`}
             onClick={() => setEnable(!enable)}
        >
            <div className="text-xl font-bold">
                {label}
            </div>
            <div className={`ms-2 p-1.5 rounded-full ${enable ? "bg-green-500" : "bg-gray-500"}`}></div>
        </div>
    );
};

export default PluginItem;
