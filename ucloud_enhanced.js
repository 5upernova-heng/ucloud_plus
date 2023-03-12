// ==UserScript==
// @name         ucloud_enhanced
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  北京邮电大学云邮教学空间优化脚本
// @author       5upernova-heng
// @match        https://ucloud.bupt.edu.cn/uclass/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bupt.edu.cn
// @grant        none
// ==/UserScript==

function assignProperties(className, styleObject) {
    const elements = Array.from(document.getElementsByClassName(className));
    elements.map((element) => {
        Object.assign(element.style, styleObject);
    });
}

(function () {
    "use strict";
    setTimeout(() => {
        assignProperties("el-carousel__container", {
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
        });
        assignProperties("el-carousel__item", {
            display: "flex",
            position: "relative",
            overflow: "initial",
            transform: "",
        });
    }, 1000);
})();
