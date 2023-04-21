export function recoverElementByClassName(className, origin) {
    Array.from(document.getElementsByClassName(className)).map(
        (element, index) => {
            element.innerHTML =
                origin.getElementsByClassName(className)[index].innerHTML;
        }
    );
}

export function assignProperties(className, styleObject) {
    const elements = Array.from(document.getElementsByClassName(className));
    elements.map((element) => {
        Object.assign(element.style, styleObject);
    });
}
