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
        },2000);        
    }
});
  