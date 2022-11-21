// This Code is not needed reqiured
// setTimeout(()=>{
//     let loginLink = document.querySelector('a[href*="login"]');
//     // undefine check should be written
//     if(loginLink){
//         loginLink.click();
//     }
// },2000);

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message);
    console.log(sender);
    console.log(sendResponse);
    if(message.open_login){
        let loginLink = document.querySelector('a[href*="login"]');
        if(loginLink){
            loginLink.click();
        }
    }
}); 