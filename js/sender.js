//bot token
var telegram_bot_id = "7581441018:AAED-ifd0t678nI-CLZG_fc546czf0dWuHE";
//chat id
var chat_id = 257840016;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
    message = "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    $('#GetTouch').hide();
    $('#ThankYou').show();
    return false;
};

