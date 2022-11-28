let inpUrl = document.getElementById("url")
let button = document.getElementById("btn")

button.addEventListener("click", function(){
    let inputData = inpUrl.value
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs)
        var activeTab = tabs[0];
       
        chrome.tabs.sendMessage(activeTab.id, {"type":"data", "items":inputData});
        
    });
})