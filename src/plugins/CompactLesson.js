import { assignProperties, deleteElements } from "../utils";

export function compactLesson(isOpen) {
    if (
        document.location.pathname === "/uclass/index.html" ||
        document.location.pathname === "/uclass/"
    ) {
        if (isOpen) {
            assignProperties(".el-carousel__item", {
                position: "relative",
                transform: "unset",
                height: "unset",
            });
            assignProperties(".my-lesson-group", {
                height: "unset",
                "padding-top": "5px",
                "padding-bottom": "5px",
            });
            assignProperties(".my-lesson-item", {
                height: "unset",
                border: "gray",
                "border-style": "solid",
                "border-width": "1px",
                "border-radius": "10px",
                "padding-bottom": "8px",
            });
            deleteElements(".my-lesson-post");
            deleteElements(".header-control");
        }
    }
}
