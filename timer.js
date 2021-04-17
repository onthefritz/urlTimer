$(document).ready(function() {
    var startTime = parseInt(getUrlParameter('timeInMilliseconds'));
    var hourInMilliseconds = 1000*60*60;
    var minuteInMilliseconds = 1000*60;
    var secondInMilliseconds = 1000;

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sound.mp3');
    
    var timerInterval = setInterval(function() {
        var time = startTime;
        startTime = startTime - 1000;
        
        var hours = Math.floor(time / hourInMilliseconds);
        if (hours > 0)
            time = time - (hours * hourInMilliseconds);

        var minutes = Math.floor(time / minuteInMilliseconds);
        if (minutes > 0)
            time = time - (minutes * minuteInMilliseconds);


        var seconds = Math.floor(time / secondInMilliseconds);
        if (seconds > 0)
            time = time - (seconds * secondInMilliseconds);

        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
        }

        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
        }

        var timer = 
        (hours > 0 ? (hours + ':') : '') + 
        (minutes > 0 ? (((minutes < 10 ? '0' : '') + minutes) + ':') : '') + 
        ((seconds < 10 ? '0' : '') + seconds);

        $('#timer').html(timer);

        if (startTime < 0) {
            clearInterval(timerInterval);
            audioElement.play();
        }
    }, 1000);
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};