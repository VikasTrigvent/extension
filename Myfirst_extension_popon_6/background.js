console.log("use for background script");

chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
        "id":"sampleContextMenu",
        "title":"Sample Conext Menu",
        "contexts":["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    console.log(info);
    console.log(tab);
    if(info.selectionText){
        let searchText = info.selectionText;
        let searchUrl = "https://www.google.com/search?q=" + searchText;
        chrome.tabs.create({url:searchUrl,active:true},function(tab){
        //   alert("Tab is Opened");
        });    
    }    
});
chrome.runtime.onMessage.addListener(async(result,sender,sendResponse)=>{
    if(result.from == "content") {
        // console.log(result.message);
        // sendResponse("From Background" + Math.random());
        // let response = await fetch("https://dummyjson.com/quotes")
        //     let objectList = await  response.json();
        //     let records = objectList["quotes"];
        //     sendResponse(records);
        //     return;

        fetch("https://dummyjson.com/quotes")
           .then(response => response.json())
           .then (records => {
                console.log(records);
                sendResponse(records); 
            });
    }else if(result.from == "popup"){

    } 
    return true;
});  