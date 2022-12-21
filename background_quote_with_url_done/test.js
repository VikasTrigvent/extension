///////------- Fetch the data from rss file -------////////////
// const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
// fetch(RSS_URL).then(response => response.text()).then(data => {
//         // console.log(data.items); 

//         console.log(data); 
// });

// function current_time(){ 
//    const d = new Date();
//    let current_time = d.getTime();
//    console.log(current_time)
// }
// current_time(); 
var last_index = 0;
function my_data() {
        let completeData;
        const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
        fetch(RSS_URL).then(response => response.json()).then(data => {

                completeData = data;
                var date_val = new Date().getTime();
                let mili = 2 * 60 * 1000;
                var answer = date_val + mili;
                var date_time = new Date(answer)
                console.log(date_time);

                chrome.storage.local.set({ 'items': data, 'time': answer }, () => {

                        console.log("data has been stored");
                });
                chrome.storage.local.get(["items", "time"], (result) => {
                        console.log(result.time);
                        // console.log(new Date(result.time)); 
                        // console.log(answer);                                 
                });
                console.log(data);
                var i = 0;
                next = 0;
                for (let items of completeData.items) {
                        chrome.storage.local.get(["iteration"], (result2) => {

                                if (typeof result2.iteration != 'undefined' && result2.iteration != '') {
                                        console.log(result2.iteration, completeData.items.length);
                                        if (parseInt(result2.iteration) < completeData.items.length) {
                                                //console.log(result2.iteration, next, i);
                                                next = parseInt(result2.iteration);
                                        } else {
                                                //console.log(result2.iteration, next, i);
                                                next = 0;
                                        }
                                } else {
                                        next = 0;
                                }
                                //console.log(result2.iteration, next, i);
                                if (i == next) {
                                        // document.write(`<div id="textDiv" style="height: 80%;display: flex;align-items: center;justify-content: center; font-size: 30px;"><center>Items description${items.description}<br><br>By:= ${items.title}</center></div>`); // Code running 
                                        document.write(`<div id="textDiv" style="height: 80%;display: flex;align-items: center;justify-content: center; font-size: 30px;"><center>${items.description}<br><br>${items.title}</center></div>`); 
                                        // document.write(`<div id="textDiv2">By:= ${items.title}<br><br></div>`);
                                        i++;
                                        chrome.storage.local.set({ 'iteration': i });
                                } else {
                                        i++;
                                }

                        });

                        // document.getElementById("innerBody")[0].appendChild(`<center><p>${items.description}</p></center>`) // Code running 
                        // document.getElementById("innerBody")[0].appendChild(`<center><p>${items.title}</p></center>`); 
                }
        });
}
//my_data();

function check() {
        chrome.storage.local.get(["items", "time"], (result) => {

                if (result.time) {
                        const d = new Date();
                        let current_time = d.getTime();
                        console.log(current_time)
                        console.log(result.time)
                        if (current_time >= result.time) {
                                console.log("after date running")
                                my_data();
                        }
                        else {
                                console.log("not work")
                        }
                }
                else {
                        console.log("no");
                        my_data();

                }
        });
}
check();

////--- Fetch the Time after 30 minutes --- //////
// var date_val = new Date().getTime();
// date_val

// let mili = 30*60*1000;
// mili

// var answer = date_val + mili;
// answer

// var date = new Date(answer)
// date
