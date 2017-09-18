$(function() {
    console.log("JS OKAY!");
    var splat_sound = new Audio('splat.mp3');
    splat_sound.play();

    $('#instructions').click(function() {
        $('#drop_down').slideToggle('slow');
    });

});