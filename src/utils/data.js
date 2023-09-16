function parseCookie() {
    const cookies = document.cookie.split('; ');
    const cookieObject = {};

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        cookieObject[name] = decodeURIComponent(value);
    }

    return cookieObject;
}


function createQueryString(url, params) {
    let result = `${url}?`
    for (let key in params) {
        result += `${key}=${params[key]}&`
    }
    return result
}

export const cookie = parseCookie()
