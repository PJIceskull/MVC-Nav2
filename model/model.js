//
var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>ABOUT</h1> 
<button onclick="dynamicListener()">PRESS</button> 
<a href="#">ABOUT Button</a>`;
var productsContent = `<h1>PRODUCT</h1>`;
var contactContent = `<h1>CONTACT</h1>`;

export var myName = "Pierce";

// This function is being called from the app.js and it has page name
export function modelPageName(pgName) {
    // console.log(pageName);
    console.log(pgName);

    $("#app").html(eval(pgName));
}