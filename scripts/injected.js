console.log("Injected Flyout Blocker.");

window.onload = function() {
    console.log('Injected on load called.');
    findElement('div.extension-frame-wrapper');
 };

 
 function findElement(selector){ 
    var element = document.querySelector(selector);
    if(element == null){
        console.log('Element with class name: ' + '(' + selector + ')' + ' not found.');
    }else{
        console.log('Element with class name: ' + '(' + selector + ')'+ ' found.');
        console.log(element);
        //TODO: Consider all elements on the page, there could be other extension-frame-wrappers on the page that are not being removed.
        element.parentElement.removeChild(element);
    }
 }

function deleteElement(element){
    element.remove();
}

// function waitForElementToDisplay(selector, time) {
//     console.log(document.querySelector(selector));
//     if(document.querySelector(selector)!=null) {
//         alert("Element found exiting.")
//         return;
//     }
//     else {
//         setTimeout(function() {
//             console.log('Cannot find.');
//             waitForElementToDisplay(selector, time);
//         }, time);
//     }
// }