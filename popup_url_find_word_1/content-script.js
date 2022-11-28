// console.log("jkdhjfh")
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

//     if (message.type == "data") {
//         let keyword = message.items
//         let divArray = document.getElementsByTagName("div")
//         let count = 0;
//         for (i = 0; i < divArray.length; i++) {
//             let allText = divArray[i].innerText
//             console.log(allText);
//             if (allText.indexOf(keyword) > 0) {
//                 count++;
//             }
//         }

//         setTimeout(() => {
//             console.log(count)
//             chrome.runtime.sendMessage({ "from": "content", "no_of_count": count });
//         }, 3000);
//     }
// });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    if (message.type == "data") {
        let keyword = message.items;
        let str = document.body.innerText;
        let rgxp = new RegExp(keyword, "g");
        // let rgxp = new RegExp(keyword);
        
        let count = str.match(rgxp).length;

        console.log(count);
        sendResponse({
            count: count
        });

        return false;
    }
});