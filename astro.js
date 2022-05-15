$(document).ready(
    function () {
    $("#view_button").click(getPicture);
    });
    function getPicture () {
    $.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=fxuEvS00DQcTTr2EvShd8j9Ka6Eh82abd2SBhZkn",
    type: "GET",
    data: { api_key: "DEMO_KEY",
    date: $("date").val() },
    dataType: "json",
    "success": showPicture,
    "error": noPicture
    });
    };
    function showPicture(data) {
    $("#pic").attr("src", data.url);
    };
    function noPicture(error) {
    alert(error.responseText);
    };