function inject(url) {
    console.log('Page loaded.');
    var element = document.createElement('script');
    console.log(element);
    element.src = chrome.extension.getURL(url);
    document.documentElement.appendChild(element);
}
inject('scripts/injected.js');