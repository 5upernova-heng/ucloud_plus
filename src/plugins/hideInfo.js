import {hideElements, showElements} from "../utils/page";

export function hideInfo(isOpen) {
    const infoSelector =
        ".teacher-post.home-inline-block, .teacher-info.home-inline-block, .user-info";
    if (isOpen) {
        hideElements(infoSelector);
    } else {
        showElements(infoSelector);
    }
}
