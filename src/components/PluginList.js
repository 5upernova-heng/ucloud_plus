import React, {useEffect, useRef, useState} from "react";
import PluginItem from "./PluginItem";
import {compactLesson} from "../plugins/compactLesson";
import {hideInfo} from "../plugins/hideInfo";
import {downloadAll} from "../plugins/downloadAll";
import {showIndex} from "../plugins/showIndex/showIndex";

const PluginList = () => {
    const [isHover, setHover] = useState(false);
    const [viewable, setView] = useState(false);

    const list = [
        {
            name: "compactLesson",
            label: "紧密的课程布局",
            handler: compactLesson,
            pathReg: /\/(uclass\/)?(index.html)?$/
        },
        {
            name: "hideInfo",
            label: "隐藏个人信息",
            handler: hideInfo,
            pathReg: /\/uclass\/.*/
        },
        {
            name: 'downloadAllFiles',
            label: "下载全部资料",
            handler: downloadAll,
            pathReg: /\/uclass\/course.html/
        },
        {
            name: 'showIndex',
            label: "显示课程目录",
            handler: showIndex,
            pathReg: /\/uclass\/.*/,
        }
    ];

    const listRef = useRef(null);

    const renderList = () => {
        return list
            .filter((plugin) => document.location.pathname.match(plugin.pathReg))
            .map((plugin, index) => (
                <PluginItem key={index} plugin={plugin}/>
            ));
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (listRef.current && !listRef.current.contains(event.target)) {
                setView(false);
                setHover(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [listRef]);

    return (
        <div
            style={{
                transition: "500ms",
                transform: viewable || isHover ? "translateX(0)" : "translateX(-50%)",
                cursor: "pointer",
            }}
            onClick={() => setView(true)}
            ref={listRef}
        >
            <div className="px-2 py-1 mx-4 text-3xl shadow rounded-full bg-white"
                 onMouseEnter={() => {
                     setHover(true);
                 }}
                 onMouseLeave={() => {
                     if (!viewable)
                         setHover(false);
                 }}
            >
                ⚙
            </div>
            <div className={`absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/2
            bg-white shadow rounded-lg w-max flex flex-col gap-1 ${viewable ? "" : "opacity-0"}`}>
                {renderList()}
            </div>
        </div>
    );
};

export default PluginList;
