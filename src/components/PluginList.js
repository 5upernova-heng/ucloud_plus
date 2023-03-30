import React from "react";
import PluginItem from "./PluginItem";
import { compactLesson } from "../plugins/CompactLesson";
import { useState } from "react";

const PluginList = ({ origin }) => {
    const [isHover, setHover] = useState(false);

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
                className="btn dropdown-toggle btn-link text-light"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
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
                <li>
                    <PluginItem
                        text={"紧密的课程布局"}
                        handler={compactLesson}
                        origin={origin}
                    />
                </li>
            </ul>
        </div>
    );
};

export default PluginList;
