import Player from '@vimeo/player';

let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
console.log('played the video!');
console.log(throttle);    
    
});

let seconds = localStorage.getItem("videoplayer-current-time");

const updateTime = function () {
    let currentTime = player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position
            console.log('time updated! ' + seconds + "  !!! " );
            localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function(error) {
        // an error occurred
        });
        console.log(currentTime); 
};

player.on('timeupdate', throttle(updateTime, 1000)); 

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
    
});



window.addEventListener("load", () => {
console.log("load");

console.log(event.target);
player.muted = true;
let currentTime = localStorage.getItem("videoplayer-current-time");
console.log(currentTime);
player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    seconds = currentTime;
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
});