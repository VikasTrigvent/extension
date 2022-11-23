// console.log("jkdhjfh")
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    if (message.type == "data") {
        let keyword = message.items
        console.log(keyword)

        let divArray = document.getElementsByTagName("div")
        let count = 0;
        for(i=0; i<divArray.length; i++){
            let allText = divArray[i].innerText

            if(allText.indexOf(keyword) > -1){
                count = count + 1;
            }
        }
        setTimeout(() => {
            console.log(count)
            chrome.runtime.sendMessage({"from":"content", "no_of_count":count});   
        }, 3000);
    }
});