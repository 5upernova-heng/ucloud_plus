# API

常用的云平台 API，域名 apiucloud.bupt.edu.cn

## 鉴权

如果无特别说明，API 的鉴权仅依赖 header 中的 `Blade-Auth` 字段。其对应 cookie 中的 `iClass-token`

> 如果您要参与开发，在 `utils/data` 中已经将 cookie 解析成了字典，可以直接导入调用。

## 数据获取

### 获取全部课程数据

GET `/ykt-site/site/list/student/current?`

- size: 数据大小，云平台自己是设置成 999999
- current: 用于分页，当前已经获取的位置
- userId: 用户 ID

### 获取作业数据

GET `/ykt-site/work/detail?`

- assignmentId: 作业 ID

### 获取单个课程所有作业

POST `/ykt-site/work/student/list`

Payload:

- siteId: "1694993661990801409"
- userId: "1430436570924810294"
- current: 1

## 页面跳转

### 课程主页

`/uclass/course.html#/student/courseHomePage?ind=1`

课程主页的跳转并不依赖 paramString，而是依赖于 cookie。在课程主页点击跳转之后，云平台会将 cookie 的课程对应字段改变。

源码：

```javascript
function tapSiteItem(e, t) {
    _.a.cookies.set("site-id", e.id),
        _.a.localStorages.setLocalStorage("site", e),
        "visited" == t ? this.myAllSiteList.some(function (t) {
            return t.id === e.id
        }) ? window.location.href = "course.html#/student/courseHomePage?ind=1" : window.location.href = "course.html#/courseCenterDetail_fullpage" : window.location.href = "course.html#/student/courseHomePage?ind=1"
}
```

其中 `site` 是获取全部数据时的课程对象。

可见，要切换页面，就要把对应 iClass-site-id 字段设置成目标课程的 ID，并将 localStorage 的 site 设置成目标课程对象（字符串形式）

> **设置 Cookie**
> 对 `document.cookie` 进行赋值就可以设置 cookie，同名 cookie 不会覆盖，但是会优先使用后设置的 cookie

### 作业页面

`/uclass/course.html#/student/assignmentDetails_fullpage`

- assignmentId: 作业的 ID
- activeTabName: 控制显示哪个 Tab。比如 first/second。 建议选择，这样跳转过去时不会是未选中 tab 的空白页面。

## 获取资源

### 下载资源

`https://apiucloud.bupt.edu.cn/blade-source/resource/download`

- resourceId: 资源 ID
- oauthKey: `md5(resouceID + gZTwLteBkHIxHhXFMcQvUMjosqYWPuzTcQwYKpFidkFcradHFm)`（后缀是一个固定的字符串）

### 获取单个课程的所有 resourceID

`https://apiucloud.bupt.edu.cn/ykt-site/site-resource/tree/student`

- siteId: 课程 ID，与用于页面跳转的 ID 相同
- userId: 用户 ID
