document.getElementById("btn").addEventListener("click",function(){
    // alert("Welcome my home");
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        // console.log(tabs[0].url);
        let tabUrl = tabs[0].url;
        if(tabUrl.indexOf("flipkart.com")==-1){
           chrome.tabs.create({url:"https://www.flipkart.com",active:true},function(tabs){
            //   alert("Tab is Opened");
           });
       }
    });
});