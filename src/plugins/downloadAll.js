// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ucloud.bupt.edu.cn/uclass/course.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bupt.edu.cn
// ==/UserScript==
import md5 from "md5";
import {cookie} from "../utils/data";

function waitForElements(selector) {
    return new Promise((resolve) => {
        if (document.querySelectorAll(selector).length !== 0) {
            resolve(document.querySelectorAll(selector));
        }
        const observer = new MutationObserver(() => {
            if (document.querySelectorAll(selector).length !== 0) {
                resolve(document.querySelectorAll(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

function download() {
    const url = "https://apiucloud.bupt.edu.cn/ykt-site/site-resource/tree/student";
    const siteId = cookie['iClass-site-id']
    const userId = cookie['iClass-uuid'];
    const fullUrl = `${url}?siteId=${siteId}&userId=${userId}`;
    let results;
    GM_xmlhttpRequest({
        method: 'POST',
        url: fullUrl,
        headers: {
            'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.31',
            'Blade-Auth': cookie['iClass-refresh_token']
        },
        onload: function (response) {
            results = JSON.parse(response.responseText).data
            let count = 0
            //console.log(results)
            results.map((section) => {
                section.attachmentVOs.map((attachment) => {
                    //console.log(attachment.attachmentInfoId, attachment.resource.name)
                    count += 1;
                    setTimeout(() => {
                        downloadAttachment(attachment.attachmentInfoId, attachment.resourceName)
                    }, count * 1000);
                })
            })
        }
    })
}

function downloadAttachment(id, name) {
    const base = "https://apiucloud.bupt.edu.cn/blade-source/resource/download"
    const uri = `${base}?resourceId=${id}&oauthKey=${md5(id + "gZTwLteBkHIxHhXFMcQvUMjosqYWPuzTcQwYKpFidkFcradHFm")}`;
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function downloadAll() {
    'use strict';
    const button = document.createElement("button")
    button.innerText = "Download All"
    button.onclick = download
    waitForElements(".el-tooltip.left.iclass-text-ellipsis").then((elements) => {
        const mountPoint = elements[0];
        mountPoint.appendChild(button);
    });
}
