import { assignProperties, recoverElementByClassName } from "../utils";

export function compactLesson(isOpen, origin) {
    if (
        document.location.pathname === "/uclass/index.html" ||
        document.location.pathname === "/uclass/"
    ) {
        if (isOpen) {
            assignProperties("el-carousel__item", {
                position: "relative",
                transform: "",
            });
            document.getElementsByClassName("header-control")[0].remove();
        } else {
            recoverElementByClassName("el-carousel__container", origin);
            recoverElementByClassName("my-lesson-header", origin);
        }
    }
}
