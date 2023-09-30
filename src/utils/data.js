function parseCookie() {
    const cookies = document.cookie.split('; ');
    const cookieObject = {};

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        cookieObject[name] = decodeURIComponent(value);
    }

    return cookieObject;
}


export const cookie = parseCookie()

export const headerWithAuth = {
    'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.31',
    'Blade-Auth': cookie['iClass-token']
}
