export function waitForElements(selector) {
    return new Promise((resolve) => {
        if (document.querySelectorAll(selector).length !== 0) {
            resolve(document.querySelectorAll(selector));
        }
        const observer = new MutationObserver((mutations) => {
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

export function assignProperties(selector, style) {
    waitForElements(selector, style).then((elements) => {
        const array = Array.from(elements);
        array.map((element) => {
            Object.assign(element.style, style);
        });
    });
}

export function deleteElements(selector) {
    waitForElements(selector).then((elements) => {
        const array = Array.from(elements);
        array.map((element) => {
            element.remove();
        });
    });
}
