let inpKeyword = document.getElementById("keyword")
let button = document.getElementById("btn")
let show = document.getElementById("show")

// button.addEventListener("click", function(){
//     let inputData = inpKeyword.value
//     chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//         console.log(tabs)     
//         var activeTab = tabs[0];       
//         chrome.tabs.sendMessage(activeTab.id, {"type":"data", "items":inputData}, function(response) {
//             if(response !== undefined){
//                 show.innerText = response.count;
//             }
//         });
//     });
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.from == "content") {
        let countTex = message.no_of_count
        show.innerText = message.no_of_count

        chrome.storage.local.set({ 'keywordtext': keyword.value, 'count': countTex }, () => {
            console.log("data has been stored");
            save_value();
        });

    }
})


function save_value() {
    chrome.storage.local.get(["keywordtext", "count"], (result) => {
        if (result.keywordtext) {
            inpKeyword.value = result.keywordtext
        }
    });
}
save_value();


/////-----------Case Sencitive Start -------//////////
save_btn = document.getElementById("btn");

save_btn.addEventListener("click", function () {
    if (document.getElementById('sensitive').checked) {
        let inputData = inpKeyword.value
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "type": "sensitive", "items": inputData }, function (response) {
                if (response !== undefined) {
                    show.innerText = response.count;
                }
                console.log(response);
            });
        });
    }
    else if (document.getElementById('insensitive').checked) {
        /////-----------Case Sencitive End -------//////////
        let inputData = inpKeyword.value
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "type": "insensitive", "items": inputData }, function (response) {
                if (response !== undefined) {
                    show.style.display='block';
                    show.innerText = response.count;
                }

            });
        });
    }
})









