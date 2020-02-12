$(document).ready(function(){
    $("#btn-down").click(function(event){
        $("#mobile-bar").css("display", "block");
    });
    $("#btn-up").click(function(event){
        $("#mobile-bar").css("display", "none");
        event.stopImmediatePropagation();
        return false;
    });
})