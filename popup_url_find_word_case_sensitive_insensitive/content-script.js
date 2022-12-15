///// -------CASE INSENCITIVE-------/////// 
// function insensitive() {
//     chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//         console.log(message);
//         if (message.type == "data") {
//             let keyword = message.items;
//             let allTextNodechild = [];
//             function processNode(childs) {
//                 for (let child of childs) {
//                     if (child.nodeType == 3) {
//                         allTextNodechild.push(child);
//                     }
//                     else {
//                         if (
//                             child.nodeName != "SCRIPT" &&
//                             child.nodeName != "IMG" &&
//                             child.nodeName != "A" &&
//                             child.nodeName != "STYLE" &&
//                             child.nodeName != "#comment" &&
//                             child.nodeName != "INPUT" &&
//                             child.nodeName != "SELECT" &&
//                             child.nodeName != "OPTION" &&
//                             child.nodeName != "NOSCRIPT"
//                         ) {
//                             processNode(child.childNodes);
//                         }
//                     }
//                 }
//             }
//             function processElements() {
//                 let body = document.body;
//                 let childs = body.childNodes;
//                 processNode(childs);
//                 count = 0;
//                 for (let i = 0; i < allTextNodechild.length; i++) {
//                     let webPageText = allTextNodechild[i].textContent;
//                     let keyword = message.items;
//                     if (webPageText.indexOf(keyword) > -1) {
//                         console.log(webPageText)
//                         count = count + 1
//                     }
//                 }
//                 setTimeout(() => {
//                     console.log(count)
//                     chrome.runtime.sendMessage({ "from": "content", "no_of_count": count });
//                 }, 1000);
//             }
//         } processElements();
//     });
// }


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message)
    /////-----Case Sensitive -------///////
    if (message.type == "sensitive") {
        let keyword = message.items;
        let str = document.body.innerText;
        let rgxp = new RegExp(keyword, "gi");
        // let rgxp = new RegExp(keyword);
        console.log(keyword)
        let count = str.match(rgxp).length;
        console.log(count);
        sendResponse({
            count: count
        });
        return false;
    } else if(message.type == "insensitive") {
        let keyword = message.items;
        let allTextNodechild = [];
        function processNode(childs) {
            for (let child of childs) {
                if (child.nodeType == 3) {
                    allTextNodechild.push(child);
                }
                else {
                    if (
                        child.nodeName != "SCRIPT" &&
                        child.nodeName != "IMG" &&
                        child.nodeName != "A" &&
                        child.nodeName != "STYLE" &&
                        child.nodeName != "#comment" &&
                        child.nodeName != "INPUT" &&
                        child.nodeName != "SELECT" &&
                        child.nodeName != "OPTION" &&
                        child.nodeName != "NOSCRIPT"
                    ) {
                        processNode(child.childNodes);
                    }
                }
            }
        }
        function processElements() {
            let body = document.body;
            let childs = body.childNodes;
            processNode(childs);
            count = 0;
            for (let i = 0; i < allTextNodechild.length; i++) {
                let webPageText = allTextNodechild[i].textContent;
                // let keyword = message.items;
                if (webPageText.indexOf(keyword) > -1) {
                    console.log(webPageText)
                    count = count + 1
                }
            }
            setTimeout(() => {
                console.log(count)
                chrome.runtime.sendMessage({ "from": "content", "no_of_count": count });
            }, 1000);
        }
        processElements();
    }

});











