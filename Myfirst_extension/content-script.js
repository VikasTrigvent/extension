// console.log("Good Morning it's my Area Group....."); 
// document.body.style.background="pink";

// setTimeout(()=>{
//     // let image = document.getElementById("img[alt='Google']");
//     let image = document.querySelector("img[alt='Google']");
//     console.log(image);
//     if(image){
//     console.log(image);
//     image.src="img/logo.png";
// }

// },3000);
document.body.style.background="pink";
    let image = document.querySelector("img[alt='Google']");
    console.log(image);
    if(image){
     console.log("Reached Here.....");
     let imagePath = chrome.runtime.getURL("img/logo.png");
    image.src = imagePath;
    image.srcset=imagePath;
}