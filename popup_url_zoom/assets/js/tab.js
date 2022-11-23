
(function () {
    startTime();
    $(".logo").attr('href', _config.baseUrl);
    $(".privacy-policy").attr('href', _config.baseUrl + 'privacy-policy');
    $(".terms-conditions").attr('href', _config.baseUrl + 'terms-conditions');
    $(".about-us").attr('href', _config.baseUrl + 'about-us');
    $(".contact-us").attr('href', _config.baseUrl + 'contact-us');

    $("#uninstall").on('click', function () {
        chrome.management.uninstallSelf();
    });
    $(".form-btn").on('click', function () {
        $("form").submit();
    });

    function startTime() {
        var theDate = new Date();
        // time will become something like "9:11 AM"
        var time = theDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        // split time from am/pm
        var meridiem = time.substr(time.length - 2);
        time = time.substring(0, time.length - 3);

        var timeArray = time.split(':');
        document.getElementById('clock').innerHTML = pad(timeArray[0]) + ":" + pad(timeArray[1]) + '<span id="meridiem">' + meridiem.toUpperCase() + '</span>';

        //$('#date').text(days[theDate.getDay()]+ ' ' +theDate.getDate()+' '+months[theDate.getMonth()]+' '+theDate.getFullYear());

        var t = setTimeout(startTime, 1000);
    }
})();

function pad(str, max = 2) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}


$(document).ready(function () {
    $(".special").on("click", function () {
        var nextentry;
        var currententry = $(this).text();
        console.log(currententry)

        var storedvalue = $("#answer").val();
        var operators = "+-*/";
        // Logic to avoid extra operator at the end of the string        
        if (storedvalue.length > 0) {
            if (operators.indexOf(currententry) != -1) {
                var last = storedvalue[storedvalue.length - 1];
                if (operators.indexOf(last) != -1) {
                    $("#answer").val(storedvalue.slice(0, -1) + currententry);
                    return;
                }
            }
        }
        // For the Opertaor select after operator visible value

        if (operators.indexOf(currententry) != -1) {
            if (storedvalue.indexOf("+") > -1 || storedvalue.indexOf("-") > -1 || storedvalue.indexOf("*") > -1 || storedvalue.indexOf("/") > -1) {
                $("#equal").click();
                storedvalue = $("#answer").val();
            }
        }
        nextentry = storedvalue + currententry;
        $("#answer").val(nextentry);
    });


    $("#equal").on("click", function () {
        var entervalue = $("#answer").val();
        console.log(entervalue);
        console.log(entervalue.indexOf("*"));
        console.log("value added");

        // $("#answer").val();
        // For the Addition 

        if (entervalue.indexOf("+") !== -1) {
            var a = entervalue.split("+");
            var result = 0;
            for (i = 0; i < a.length; i++) {
                //result=result + +a[i];
                $("#answer").val(result = result + +a[i]);
            }
            console.log(result)  
            
         
            // For the Subtraction    

        } else if (entervalue.indexOf("-") !== -1 && entervalue.charAt(0) != "-") {
            var a = entervalue.split("-");
            var result = 0;
            for (i = 0; i < a.length; i++) {
                if (i == 0) {
                    result = a[i]
                } else {
                    //	result = result - a[i]
                    $("#answer").val(result = result - a[i]);
                }
            }
            console.log(result)
        } else if (/^(-+[0-9]+)+$/.test(entervalue)) {
            console.log("yes");
            var a = entervalue.split("-");
            var result = 0;
            for (i = 0; i < a.length; i++) {
                if (i == 0) {
                    result = a[i]
                } else {
                    //	result = result - a[i]
                    $("#answer").val(result = result - a[i]);
                }
            }
            console.log(result)
        }

        // For the 	Multiplication

        else if (entervalue.indexOf("*") !== -1) {
            var a = entervalue.split("*");
            var result = 1;
            for (i = 0; i < a.length; i++) {
                //result= result * a[i];
                $("#answer").val(result = result * a[i]);
            }
            console.log(result)

            // For the Division

        } else if (entervalue.indexOf("/") !== -1) {
            console.log("hello JI h");
            var a = entervalue.split("/");
            var result = 0;
            for (i = 0; i < a.length; i++) {
                if (i == 0) {
                    result = a[i]
                } else {
                    //result=result/a[i]
                    console.log(result + "hello JI" + a[i]);
                    if (a[i] == 0) {
                        $("#answer").val('NAN');
                    }
                    else {
                        $("#answer").val(result = result / a[i]);
                    }
                }
            }
        }
        console.log(result)
     });
});
// For the input text value clear

$(document).ready(function () {
    $("#clear").click(function () {
        $("#answer").val('');
    });
});

// For the squre of the number

$(document).ready(function () {
    $("#square").click(function () {
        var storedvalue = $("#answer").val();
        var i = parseInt($("#answer").val());
        var result = i * i;
        console.log("storedvalue");
        $("#answer").val(result);
    });
});

// For the square root of a number

$(document).ready(function () {
    $("#square1").click(function () {
        var storedvalue = $("#answer").val();
        var i = parseInt($("#answer").val());
        //var result = i * i;
        var result = Math.sqrt(i);
        console.log("result");
        $("#answer").val(result);
    });
});

$(document).ready(function () {
    $("#specia").click(function () {
        if (currententry === "→") {
            return;
        }
    });
});

// For the backspace number of value

$(document).ready(function () {
    $("#arrow").click(function () {
        console.log("Good morning");
        // let value = parseInt($("#answer").val());
        // if(!isNaN(value)){
        // 	value = Math.floor(value / 10);
        // 	$("#answer").val(value.toString());
        // }
        let value = $("#answer").val();
        console.log(value);
        var result = "";
        if (value.length > 1) {
            result = value.substring(0, value.length - 1);
        }
        $("#answer").val(result);
    });
});

//For the backspace number of value click on backspace button in keyboard

$(document).ready(function () {
    $("#answer").keydown(function (event) {
        let allowedChars = "0123456789+-*/";
        if (allowedChars.indexOf(event.key) == -1) {
            if (event.key != "Backspace") {
                event.preventDefault();
            }
        }
    });
});

// $(document).ready(function () {
//     $("#equal").click(function () {
//         $("#answer").hide;
//     });
// });
// $(document).ready(function(){
//     $(".special").click(function(){
     
//     });
//   });
// $(document).ready(function () {
//     $(".special").click(function () {
//         $("#answer").val('');
//     });
// });






