$(document).ready(function(){
    var checkboxes = $("input[type=checkbox]");
    checkboxes.on('change', function(){
        var numChecks = document.querySelectorAll('input[type="checkbox"]:checked').length;
        $("#numberCards").html(numChecks);
        $("#numberPlayers").html(numChecks - 3);
    })
})