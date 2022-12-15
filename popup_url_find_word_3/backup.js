// Gagan Sir Code
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.type == "data") {
//         let keyword = message.items;
//         let childs = document.body.childNodes;

//         processNode(childs);

//         // console.log(childs);
//         // for (let i = 0; i < child.length; i++) {

//         //     console.log(child[i]);
//         // }
//     }
// });

// let allTextNodeChild = [];
// function processNode(childs) {
//     for (let child of childs) {
//         if (child.nodeType == 3) {
//             console.log(child.nodeType);
//             console.log(child.nodeName);
//             allTextNodeChild.push(child);
//         } else {
//             // console.log(child.nodeName);
//             if (
//                 child.nodeName != "SCRIPT" &&
//                 child.nodeName != "IMG" &&
//                 child.nodeName != "A" &&
//                 child.nodeName != "STYLE" &&
//                 child.nodeName != "#comment" &&
//                 child.nodeName != "INPUT" &&
//                 child.nodeName != "SELECT" &&
//                 child.nodeName != "OPTION" &&
//                 child.nodeName != "NOSCRIPT"
//             ) {
//                 processNode(child.childNodes);
//             }
//         }
//     }
// }
// function processElements() {
//     let body = document.body;
//     let childs = body.childNodes;
//     processNode(childs);
//     for (let j = 0; j < allTextNodeChild.length; j++) {
//         processChildNodeValue(allTextNodeChild[j]);
//     }
// }


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {


  

    if (message.type == "data") {
        let keyword = message.items;
        // console.log("ytttt")
        // console.log(keyword)
        // let body = document.body;
        // let childs = body.childNodes;
        // let value = childs.nodeValue;
        // console.log(childs);
        // console.log(value);
        
        let allTextNodechild=[];
              // console.log(allTextNodechild);
            
        function processNode(childs) {
        // console.log(childs);
            
        for(let child of childs){
            // console.log("ttruturjt")
            if(child.nodeType==3){
            //    console.log(child.nodeType)            
            allTextNodechild.push(child);
                //  console.log( allTextNodechild);   
        }    
        else{
            // console.log(child.nodeName);
            if(
                child.nodeName != "SCRIPT" &&
                child.nodeName != "IMG" &&
                child.nodeName != "A" &&
                child.nodeName != "STYLE" &&
                child.nodeName != "#comment" &&
                child.nodeName != "INPUT" &&
                child.nodeName != "SELECT" &&
                child.nodeName != "OPTION" &&
                child.nodeName != "NOSCRIPT"
            ){
                processNode(child.childNodes);
                // console.log(processNode);
            }
          }          
       }
    }
       
       function processElements() {
        let body = document.body;
        let childs = body.childNodes;
        processNode(childs);

        for (let i = 0; i < allTextNodechild.length; i++) {
        let webPageText = (allTextNodechild[i]);
        // let webPageText = allTextNodechild[i].innerText;
        // console.log(webPageText)
        if(webPageText.indexOf(keyword) > 0){
            count ++;
            console.log(webPageText);
        }
        
        setTimeout(() => {
          console.log(count)
          chrome.runtime.sendMessage({ "from": "content", "no_of_count": count });
        }, 2000);
                
    
        // let indexes=[]
        // indexes.push(webPageText)
        
        // console.log(indexes.indexOf(keyword))
        
        // console.log(webPageText)
        // console.log(webPageText)
        // console.log(keyword)
    
        // console.log(webPageText.indexOf(keyword))
        // if(webPageText.indexOf(keyword) > 0){
            
        //  count++;
        //    console.log(webPageText)
        //  console.log(keyword)
        //  }
    }
    }
    }  processElements();  
    

});


        




        // let value = childs.nodeValue; 
        // console.log(value);
        // for(let i=0; i<=str.length; i++){
        //     console.log(str.text);
        //     // console.log(str[i]);
        // }
        // let text = str;
        // var nodes = '';
        // let text = document.createTextNode('div');
        // dispatchEvent.appendChild(text)
        
        // console.log(text);
        
        // let text = document.createTextNode('div');
        // dispatchEvent.appendChild(text)
        
        // console.log(str);
        
//     }
// });







//---------------Find the Count of number in url -------------//  
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

//     if (message.type == "data") {
//         let keyword = message.items;
//         let str = document.body.innerText;
//         let rgxp = new RegExp(keyword, "g");
//         // let rgxp = new RegExp(keyword);
        
//         let count = str.match(rgxp).length;

//         console.log(count);
//         sendResponse({
//             count: count
//         });

//         return false;
//     }
// });

// ---------------Find the Count of number in url case insensitive -------------//

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

//     if (message.type == "data") {
//         let keyword = message.items;
//         let main_html = document.body.innerHTML;
//         let main_html_bak = document.body.innerHTML;
//         let pattern = new RegExp("<a\\b[^>]*>.*?<\/a>|("+keyword+")", "gi");
//         str = main_html.replace(pattern, function(match, p1) {
//             return p1 == undefined?"":match;
//         });
//         document.body.innerHTML = str;
//         str = document.body.innerText;
//         pattern = new RegExp("("+keyword+")", "gi");
//         let count = str.match(pattern).length;
//         document.body.innerHtml = main_html_bak;

//         sendResponse({
//             count: count
//         });
//     }
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

//     if (message.type == "data") {
//         let keyword = message.items;
//         // let str = document.body.innerHTML;
//         let str = document.body.childNodes;
//         for(let i=0; i<=str.length; i++){
//             console.log(str.text);
//             // console.log(str[i]);
//         }
//         // let text = str;
//         // var nodes = '';
//         // let text = document.createTextNode('div');
//         // dispatchEvent.appendChild(text)
        
//         // console.log(text);
        
//         // let text = document.createTextNode('div');
//         // dispatchEvent.appendChild(text)
        
//         // console.log(str);
        
//     }
// });


// var body = document.body
// var childs= body.childNodes
// var text= '';
// for(var i=0;i<childs.length;i++){
//     console.log(childs[i].nodeName)
//     switch(childs[i].nodeName){        
//         case'#text' : text = text + childs[i].nodevalue;
//         break;
//         case 'BR' : text = text + '\n'; break;
//     }
// }

// var body = document.body
// var childs= body.childNodes
// for(var i=0;i<childs.length;i++){
//     var node = childs[i];
//     console.log(node);
// }
   

// console.log(text);
// var body=document.body
// var childs =body.childNodes
// console.log(childs)

// let str = document.body.childNodes
// var text='';
// for(let i=0; i<=str.length; i++){
//     switch(str[i].nodeName){
//         case'#text':text = text + str[i].nodeValue;break;
//         case 'BR' : text = text + '\n';break;
//     }
//     console.log(str[i]);
//     console.log(str[i].text);

// }

// let str = document.body.childNodes
// var text='';
// for(let i=0; i<=str.length; i++){
//     switch(str[i].nodeName){
//         case'#text':text = text + str[i].nodeValue;break;
//         case 'BR' : text = text + '\n';break;
//     }
//     console.log(str[i]);
//     console.log(str[i].text);

// }






