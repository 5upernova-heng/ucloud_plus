import React from "react";
import { createRoot } from "react-dom/client";
import PluginList from "./components/PluginList";
import "bootstrap/dist/css/bootstrap.min.css";
import { waitForElements } from "./utils/page";

async function scriptMain() {
    const r = document.createElement("div");
    r.id = "root";
    waitForElements(".right").then((elements) => {
        const mountPoint = elements[0];
        mountPoint.appendChild(r);
        const root = createRoot(document.getElementById("root"));
        root.render(<PluginList />);
    });
}

(function () {
    "use strict";
    scriptMain();
})();
