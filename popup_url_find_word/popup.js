let inpUrl = document.getElementById("url")
let button = document.getElementById("btn")
let show = document.getElementById("show")

button.addEventListener("click", function(){
    let inputData = inpUrl.value
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs)
        var activeTab = tabs[0];
       
        chrome.tabs.sendMessage(activeTab.id, {"type":"data", "items":inputData});
        
    });
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message.from == "content"){
        show.innerText = message.no_of_count
    }
})
