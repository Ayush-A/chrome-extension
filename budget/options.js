$(function(){
    chrome.storage.sync.get("limit", function(budget){
        $("#limit").val(budget.limit);
    });
    $("#saveLimit").click(function(){
        var limit = $("#limit").val();
        if (limit){
            chrome.storage.sync.set({"limit": limit}, function(){
                close();
            });
        }
    });
    $("#resetTotal").click(function(){
        chrome.storage.sync.set({"total": 0}, function(){
            var limitNotif = {
                type: "basic",
                iconUrl: "icons8-money-40.png",
                title: "Total Reset",
                message: "Total is now set to 0."
            };
            chrome.notifications.create("limitNotification", limitNotif);
        });
    });
});