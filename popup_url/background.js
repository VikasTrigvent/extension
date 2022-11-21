// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     //console.log(message);
//     if (message.action === "open_new_window") {
//     url1 = message.url;
//        console.log(url1 );
//     }else{
//         chrome.tabs.create({ url: url1,active:true },function (tabs) {
//             console.log(tabs);
//             commentADFParentTabId = tabs.id;
//             // commentADFParentTabId = url.id;
//         });
//     }
// })

// chrome.tabs.create({ url: url1,active:true },function (tabs) {
//     console.log(tabs);
//     // commentADFParentTabId = tabs.id;
//     commentADFParentTabId = url.id;
// });
// console.log("url");