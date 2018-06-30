$(function() {
    $("#name").keyup(function() {
        $("#sayhello").text("Hello " + $("#name").val());
    });
});