////////------- Fetch the data from rss file -------////////////
// const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
// fetch(RSS_URL).then(response => response.text()).then(data => {
//         // console.log(data.items); 

//         console.log(data); 
// });


const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
fetch(RSS_URL).then(response => response.json()).then(data => {
        // console.log(data.items); 
        // const obj = JSON.parse(data);       
        console.log(data.feed);    
        document.getElementById('url').innerHTML = "Url:-" + data.feed.url
        document.getElementById('title').innerHTML = "Title:-" + data.feed.title
        document.getElementById('link').innerHTML = "Link:-" + data.feed.link
        document.getElementById('description').innerHTML = "Description:-" + data.feed.description
        document.getElementById('image').innerHTML = "Image:-" + data.feed.image       
        
        console.log(data);      
});



// setInterval(() => {
//         console.log(RSS_URL)
// }, 2000);

// const RSS_URL = `https://codepen.io/picks/feed/`;


// const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://codepen.io/picks/feed/`;

// const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
// fetch(RSS_URL)
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(data => {
//     console.log(data);
//     let dataHtml = data;
    
//     let bodyDiv = document.getElementById("body").innerHTML = dataHtml
//     console.log(bodyDiv);

//   });

// const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.brainyquote.com/link/quotebr.rss`;
// fetch(RSS_URL)
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(data => {
//     console.log(data);
//     const items = data.querySelectorAll("item");
//     let html = ``;
//     items.forEach(el => {
//         html += `
//         <article>
//           <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
//           <h2>
//             <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
//               ${el.querySelector("title").innerHTML}
//             </a>
//           </h2>
//         </article>
//       `;
//     });
// });
// document.body.insertAdjacentHTML("beforeend", html);




//------------  Code Running with API   --------- ////

// var url = 'https://www.brainyquote.com/link/quotebr.rss'; //Data in XML format  
//     $.ajax({  
//         type: 'GET',  
//         url: "https://api.rss2json.com/v1/api.json?rss_url=" + url, //For converting default format to JSON format  
//         dataType: 'jsonp', //for making cross domain call  
//         success: function(data) {  
//             alert('Success');  
//             console.log(data);  
//         }  
//     });