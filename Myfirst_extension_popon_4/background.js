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