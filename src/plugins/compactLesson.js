import {assignProperties, deleteElements, hideElements, waitForElements} from "../utils/page";

export function compactLesson() {
    let originalElement = null
    waitForElements(".my-lesson-section.home-card").then(
        (value) => {
            originalElement = value[0]
            assignProperties(".el-carousel__item", {
                position: "relative",
                transform: "unset",
                height: "unset",
            });
            assignProperties(".my-lesson-group", {
                height: "unset",
                paddingTop: "5px",
                paddingBottom: "5px",
            });
            assignProperties(".my-lesson-item", {
                height: "unset",
                border: "1px solid rgba(157,166,181,.5)",
                borderRadius: "8px",
                paddingBottom: "8px",
            });
            hideElements(".header-control");
            deleteElements(".my-lesson-post");
        }
    )
}
