let inpKeyword = document.getElementById("keyword")
let button = document.getElementById("btn")
let show = document.getElementById("show")

button.addEventListener("click", function(){
    let inputData = inpKeyword.value
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {     
        var activeTab = tabs[0];       
        chrome.tabs.sendMessage(activeTab.id, {"type":"data", "items":inputData}, function(response) {
            if(response !== undefined){
                show.innerText = response.count;
            }
        });
    });
});
// let countTex = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.from == "content"){
        let countTex = message.no_of_count
        show.innerText = message.no_of_count

        chrome.storage.local.set({'keywordtext':keyword.value,'count':countTex},()=>{
            // chrome.storage.local.set({'keywordtext':inpKeyword.value},()=>{
            console.log("data has been stored");
            save_value();
        });

    }
})


// Text value save in local storage -------------------------------

// chrome.storage.local.get(null,(result)=>{
//     console.log(result);
// })

// button.addEventListener("click", function(){
//     setTimeout(() => {
//         console.log(countTex)
//         chrome.storage.local.set({'keywordtext':keyword.value,'count':countTex},()=>{
//         // chrome.storage.local.set({'keywordtext':inpKeyword.value},()=>{
//             console.log("data has been stored");
//             save_value();
//         });
//     }, 4000);
    
// });

function save_value(){
    chrome.storage.local.get(["keywordtext","count"],(result)=>{
        console.log(result)
        if(result.keywordtext){
            inpKeyword.value = result.keywordtext
            // show.innerText = result.count
        }
        // keyword.innerText = result.keywordtext;
        // keywordValue.value = result.keywordtext;

        // keyword.innerText = result.keyword;
        // keywordValue.value = result.inpKeyword;
    });
}
save_value();










