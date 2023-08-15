export function displayJsonContents(jsonObj) {
    const jsonString = JSON.stringify(jsonObj, null, 2); // The third argument (2) adds indentation for readability
    console.log(jsonString);
}



export function getDefaultAltImgSrc() {
    return "/img/product/beetle-1.jpg";
}



