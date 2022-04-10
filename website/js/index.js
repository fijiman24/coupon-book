document.getElementById("submit-button").addEventListener("click", clickSubmit);

function clickSubmit(event) {
    event.preventDefault();
    var inputValue = document.getElementById("code-input").value;
    switch (true) {
        case inputValue == "AUGUST":
            window.location.replace("augustreflection.html");
            break;
        case inputValue == "FEDEX":
            window.location.replace("deliveryservice.html");
            break;
        case inputValue == "VELVET":
            window.location.replace("learnsong.html");
            break;
        case inputValue == "FIVESTARMICHELIN":
            window.location.replace("makefood.html");
            break;
        case inputValue == "GUNPLAY":
            window.location.replace("playvalorant.html");
            break;
        case inputValue == "AUDIBLE":
            window.location.replace("recordbook.html");
            break;
        case inputValue == "JOYRIDE":
            window.location.replace("taxiservice.html");
            break;
        case inputValue == "DAISY":
            window.location.replace("walkdaisy.html");
            break;
        case inputValue == "GENIE":
            window.location.replace("wildcard.html");
            break;
        default:
            document.getElementById("error-message").innerHTML = "Not a valid coupon code! Please try again.";
    }
}
