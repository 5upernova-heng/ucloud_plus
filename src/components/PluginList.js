import React from "react";
import PluginItem from "./PluginItem";
import { compactLesson } from "../plugins/CompactLesson";

const PluginList = ({ origin }) => {
    return (
        <div className="dropdown mx-3">
            <button
                className="btn dropdown-toggle btn-link text-light"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
            </button>

            <ul class="dropdown-menu">
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
