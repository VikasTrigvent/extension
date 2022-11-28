let inpKeyword = document.getElementById("keyword")
let button = document.getElementById("btn")
let show = document.getElementById("show")

button.addEventListener("click", function(){
    let inputData = inpKeyword.value
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {     
        var activeTab = tabs[0];       
        chrome.tabs.sendMessage(activeTab.id, {"type":"data", "items":inputData}, function(response) {
            show.innerText = response.count;
        });    
    });
});