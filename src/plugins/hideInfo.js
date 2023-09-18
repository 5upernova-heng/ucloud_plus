import {hideElements, showElements} from "../utils/page";

export function hideInfo(enable) {
    const infoSelector =
        ".teacher-post.home-inline-block, .teacher-info.home-inline-block, .user-info";
    if (enable) {
        hideElements(infoSelector);
    } else {
        showElements(infoSelector);
    }
}
