import React from "react";
import { createRoot } from "react-dom/client";
import PluginList from "./components/PluginList";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function addCss(filename) {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = filename;
    document.head.appendChild(link);
}

function scriptMain() {
    addCss(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    );
    const r = document.createElement("div");
    r.id = "root";
    document.getElementsByClassName("right")[0].appendChild(r);
    const origin = document.cloneNode(true);
    const root = createRoot(document.getElementById("root"));
    root.render(<PluginList origin={origin} />);
}

(function () {
    "use strict";
    setTimeout(() => {
        scriptMain();
    }, 1000);
})();
