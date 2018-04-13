var audio = $('audio')[0];
var button = $('#play')[0];

var limit = 50;
//number of files

var random = Math.floor(Math.random() * limit);
audio.src = "./music/" + random + ".mp3";

audio.addEventListener('ended', function() {
    let random = Math.floor(Math.random() * limit);
    let currentSource = audio.currentSrc.split('/').pop();
    let current = currentSource.substring(0, currentSource.indexOf('.'));
    if (current == random) {
        if (current == 0) random++;
        else random--;
    }
    // console.log(currentSource);
    audio.src = "./music/" + random + ".mp3";
    audio.play();
});

audio.addEventListener('timeupdate', function() {
    let total = audio.duration;
    let curr = audio.currentTime;
    document.getElementById("progress").style.width = ((curr / total) * 100) + "%";
    // if(total - curr <= 3 && audio.volume != 0)
    //     audio.volume = audio.volume - 0.1;
});

button.addEventListener('click', function() {
    if (audio.paused == true) {
        audio.play();
        button.innerHTML = "pause";
    } else {
        audio.pause();
        button.innerHTML = "play";
    }
});