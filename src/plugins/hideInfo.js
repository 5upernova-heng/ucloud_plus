import { hideElements, showElements } from "../utils/page";

export function hideInfo(isOpen) {
    if (
        document.location.pathname === "/uclass/index.html" ||
        document.location.pathname === "/uclass/"
    ) {
        const infoSelector =
            ".teacher-post.home-inline-block, .teacher-info.home-inline-block, .user-info";
        if (isOpen) {
            hideElements(infoSelector);
        } else {
            showElements(infoSelector);
        }
    }
}
