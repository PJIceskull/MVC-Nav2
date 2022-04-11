import * as MODEL from "../model/model.js";

function route() {
    // console.log("Hello");
    // let hashTag = window.location;
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    // console.log(hashTag);
    // console.log(pageName);
    let pageContent = pageName + "Content";

    if (pageName == "") {
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}

// export function dynamicListener() {
//     console.log("dynamic");
// }

function initListeners() {
    $(window).on("hashchange", route);
}

$(document).ready(function () {
    // console.log(MODEL.myName);
    initListeners();
});
