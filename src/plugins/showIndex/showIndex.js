import React from "react";
import {assignProperties, hideElements, showElements} from "../../utils/page";
import {createRoot} from "react-dom/client";
import IndexList from "./IndexList";
import {IndexListStyle} from "../../style";

export function showIndex(enable) {
    const id = "indexList"
    if (enable) {
        if (document.getElementById(id)) {
            showElements(`#${id}`)
        }
        const indexList = document.createElement('div');
        document.body.appendChild(indexList);
        indexList.id = id;
        const root = createRoot(indexList);
        assignProperties(`#${id}`, IndexListStyle)
        root.render(<IndexList/>)
    } else {
        if (document.getElementById(id)) {
            hideElements(`#${id}`)
        }
    }
}
