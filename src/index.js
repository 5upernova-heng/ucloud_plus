import React from "react";
import {createRoot} from "react-dom/client";
import PluginList from "./components/PluginList";
import {assignProperties} from "./utils/page";
import "/src/input.css"
import {PluginListStyle} from "./style";

function scriptMain() {
    const r = document.createElement("div");
    r.id = "root";
    assignProperties('#root', PluginListStyle)
    document.body.appendChild(r);
    const root = createRoot(r);
    root.render(<PluginList/>);
}

(function () {
    "use strict";
    scriptMain();
})();
