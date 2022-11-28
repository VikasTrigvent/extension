// console.log("jkdhjfh")
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === "data") {
        let keyword = message.items
        console.log(keyword)
         let url = "https://www.google.com/search?q="+keyword
         document.location.href = url;
    }
});