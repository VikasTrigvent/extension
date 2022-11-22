function callMe() {  //It's is code find by R&D
    alert($("#url").val());
    fetch($("#url").val(), {
        method: 'GET',
    })
    .then((data) => {
        // IMP to convert your json or other response to blob ( for this you have to check your api response is file / binary 
        return data.blob()
    })
    .then((data) => {
        console.log(data);
        var reader = new FileReader();
        reader.onload = function () {
            var b64 = reader.result
            console.log("This is base64", b64)
            document.getElementById("imagetoShow").src = b64
        }
        reader.readAsDataURL(data)
    })
    .catch((error) => {
        error.text().then(errorMessage => {
            console.log(errorMessage)
        })
    });
}
$(document).ready(function () {
    $("#btn").click(callMe);
});
