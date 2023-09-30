import React, {useCallback, useEffect, useState} from "react";
import {cookie, headerWithAuth} from "../../utils/data";
import IndexListItem from "./IndexListItem";

const base = "https://apiucloud.bupt.edu.cn"
const coursePage = "course.html#/student/courseHomePage?ind=1"

function IndexList() {
    const [sites, setSites] = useState([])

    const renderList = useCallback(() => {
        return sites.map((site) => {
            const {siteName, id, teachers} = site;
            return <div className="text-lg cursor-pointer" onClick={() => {
                document.cookie = `iClass-site-id=${id}`
                window.localStorage.setItem('site', JSON.stringify(site));
                if (window.location.pathname === "/uclass/course.html") {
                    window.location.reload();
                } else {
                    window.location.href = coursePage;
                }
            }}>{<IndexListItem label={siteName} subLabel={teachers[0]['name']}/>}</div>
        })
    }, [sites])

    useEffect(() => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: `${base}/ykt-site/site/list/student/current?size=999999&userId=${cookie['iClass-uuid']}`,
            headers: headerWithAuth,
            onload: function (response) {
                const results = JSON.parse(response.responseText).data.records;
                setSites(results);
            }
        })
    }, [])

    return <div className="bg-white rounded-lg">
        {renderList()}
    </div>
}

export default IndexList
