// This Code is not needed reqiured
// setTimeout(()=>{
//     let loginLink = document.querySelector('a[href*="login"]');
//     // undefine check should be written
//     if(loginLink){
//         loginLink.click();
//     }
// },2000); 
function openLoginPopup(){
    let loginLink = document.querySelector('a[href*="login"]');
      if(loginLink){
         loginLink.click();
      }
}

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message);
    console.log(sender);
    console.log(sendResponse);
    if(message.open_login){
        openLoginPopup();
    }
}); 
 
chrome.storage.local.get(["open_login"],function(result){
    if(result.open_login){
        setTimeout(()=>{
            openLoginPopup();
            chrome.storage.local.remove(["open_login"],function(result){
                console.log("storage is removed"); 
            });
            // alert("hello");
        },2000);        
    }
});

setTimeout( ()=>{
    let btn = document.createElement("button");
    btn.innerHTML = "Click to send message";
    btn.style.position = "absolute";
    btn.style.top="0px";
    btn.style.left= "0px";
    btn.style.zIndex = 999999;
    btn.addEventListener("click",function(){
        chrome.runtime.sendMessage({"from":"content","message":"Good Morning"},(message)=>{
            console.log(message);
        });
        // fetch("https://dummyjson.com/quotes")
        // .then(response => response.json())
        // .then(data=>{
        //     console.log(data);
        // })
    });
    document.body.appendChild(btn);

},2000);