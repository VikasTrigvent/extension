document.body.style.background="pink";
    let image = document.querySelector("img[alt='Google']");
    console.log(image);

    if(image){
    console.log("Reached Here.....");
    let imagePath = chrome.runtime.getURL("img/logo.png");
    image.src = imagePath;
    image.srcset=imagePath;
}

let btn = document.createElement("button");
btn.innerHTML = "Click to Display All Links";
btn.className="top_button";
document.body.appendChild(btn);
btn.addEventListener("click",function(){
    console.log("Yes it's Clicked");
    let allLinks = document.querySelectorAll("a");
    let linkArray = [];
    allLinks.forEach((item)=>{
        linkArray.push(item.href);
    })
    generatePopupDisplay(linkArray);
});

function generatePopupDisplay(links){
    let element = document.createElement("div");
    element.id="top_div"
    let output = '<div id="top_div">';
    output += `<table>
                <tr>
                    <th>Link Href</th>
                </tr>
                `;
    links.forEach((value)=>{
        output += `<tr>
                    <td>${value}</td>
                    </tr>`;
    });      
    element.innerHTML = output;
    document.body.appendChild(element);       
}
