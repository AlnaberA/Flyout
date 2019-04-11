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