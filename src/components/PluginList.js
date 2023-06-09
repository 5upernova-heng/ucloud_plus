import React from "react";
import PluginItem from "./PluginItem";
import { compactLesson } from "../plugins/CompactLesson";
import { useState } from "react";
import { hideInfo } from "../plugins/HideInfo";

const PluginList = () => {
    const [isHover, setHover] = useState(false);

    const list = [
        {
            name: "compactLesson",
            label: "紧密的课程布局",
            handler: compactLesson,
        },
        { name: "hideInfo", label: "隐藏个人信息", handler: hideInfo },
    ];

    const renderList = () => {
        return list.map((plugin, index) => (
            <li>
                <PluginItem key={index} plugin={plugin} />
            </li>
        ));
    };

    return (
        <div
            className="dropdown mx-3"
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <button
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                ⚙
            </button>

            <ul
                className="dropdown-menu"
                style={
                    isHover
                        ? {
                              display: "block",
                          }
                        : {}
                }
            >
                {renderList()}
            </ul>
        </div>
    );
};

export default PluginList;
