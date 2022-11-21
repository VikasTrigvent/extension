// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("btn").onclick = function(){         
//         // var url = $("#url").val();
//         var url = document.getElementById("url").value;
//             //  alert("Hello ji");            
//                 chrome.tabs.create({url:"#input",active:true},function(tabs){
//              });        
//         }
// });
    
    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("btn").onclick = function(){         
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
     
            var url = document.getElementById("url").value;
            let tabUrl = tabs[0].url;  
            // if(tabUrl.indexOf("#url")==-1){
                chrome.tabs.create({url:"#url",active:true},function(tabs){
                 //   alert("Tab is Opened");
                  }); 
            //    }
          });              
        }
    });    

