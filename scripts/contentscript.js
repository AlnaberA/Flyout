function inject(url) {
    console.log('Page loaded.');
    // var s = document.createElement('script');
    // s.src = chrome.extension.getURL(url);
    // s.onload = function() { this.remove(); };
    // (document.head || document.documentElement).appendChild(s);
}
 inject('lib.js');
// inject('injected.js');