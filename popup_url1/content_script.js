document.getElementById('cub').onclick = function() {
    // this method is not working while clicking the button
    alert('Method called');
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        $('#cu').html(tabs[0].url);
    });
}

window.onload = function() {
    // window.onload giving problem when i clicking multiple time continuously on the icon
    // also I doubt this is the best way to implement it
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        $('#cu').html(tabs[0].url);
    });
}