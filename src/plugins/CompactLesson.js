export function compactLesson(isOpen, origin) {
    if (isOpen) {
        assignProperties("el-carousel__container", {
            display: "flex",
            flexDirection: "column",
        });
        assignProperties("el-carousel__item", {
            display: "flex",
            position: "relative",
            overflow: "initial",
            transform: "",
        });
        document.getElementsByClassName("header-control")[0].remove();
    } else {
        recoverElementByClassName("el-carousel__container", origin);
        recoverElementByClassName("my-lesson-header", origin);
    }
}

function recoverElementByClassName(className, origin) {
    Array.from(document.getElementsByClassName(className)).map(
        (element, index) => {
            element.innerHTML =
                origin.getElementsByClassName(className)[index].innerHTML;
        }
    );
}

function assignProperties(className, styleObject) {
    const elements = Array.from(document.getElementsByClassName(className));
    elements.map((element) => {
        Object.assign(element.style, styleObject);
    });
}
