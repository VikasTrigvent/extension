document.getElementById("btn").addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        // console.log(tabs[0].url);
        let currentTab = tabs[0];
        let tabUrl = currentTab.url;
        console.log(currentTab);        
        if(tabUrl.indexOf("flipkart.com")==-1){
           chrome.storage.local.set({"open_login":"yes"},function(result){
            chrome.tabs.create({url:"https://www.flipkart.com",active:true},function(tab){
                //   alert("Tab is Opened");
               });
           });           
        }else{
        chrome.tabs.sendMessage(currentTab.id,{"open_login":"yes"});
        window.close();
       }
    });
});    