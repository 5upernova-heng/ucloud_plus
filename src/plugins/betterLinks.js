(function () {
    "use strict";
    const div = document.createElement('h1')
    div.innerText = "⚙"
    div.onmouseenter = function () {
        Object.assign(div.style, {
            transform: "translateX(0)"
        })
    }
    div.onmouseleave = function () {
        Object.assign(div.style, {
            transform: "translateX(-50%)"
        })
    }
    Object.assign(div.style, {
        transition: "500ms",
        transform: "translateX(-50%)",
        cursor: "pointer",
    })
    document.body.appendChild(div)
})();
