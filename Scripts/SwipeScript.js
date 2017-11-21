$(document).ready(function () {

    //$("p").on("swipeleft", function () {
    //alert("Swipe left event detected!");
    //});

    $( document ).on("swipe", swipeHandler);
    // $("#tabSwipe").swipe(swipeHandler);
    function swipeHandler(event) {
        $(event.target).addClass("swipe");
        $alert("Swipe right event detected!");
        $("#sectionA").hide();
        $("#sectionB").show();
    }

});