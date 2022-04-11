document.getElementById("submit-button").addEventListener("click", clickSubmit);

function clickSubmit(event) {
    event.preventDefault();
    var inputValue = document.getElementById("code-input").value.toUpperCase();
    switch (true) {
        case inputValue == "AUGUST":
            window.location.replace("pages/augustreflection.html");
            break;
        case inputValue == "FEDEX":
            window.location.replace("pages/deliveryservice.html");
            break;
        case inputValue == "VELVET":
            window.location.replace("pages/learnsong.html");
            break;
        case inputValue == "FIVESTARMICHELIN":
            window.location.replace("pages/makefood.html");
            break;
        case inputValue == "GUNPLAY":
            window.location.replace("pages/playvalorant.html");
            break;
        case inputValue == "AUDIBLE":
            window.location.replace("pages/recordbook.html");
            break;
        case inputValue == "JOYRIDE":
            window.location.replace("pages/taxiservice.html");
            break;
        case inputValue == "DOLITTLE":
            window.location.replace("pages/walkdaisy.html");
            break;
        case inputValue == "GENIE":
            window.location.replace("pages/wildcard.html");
            break;
        default:
            document.getElementById("error-message").innerHTML = "Not a valid coupon code! Please try again.";
    }
}
