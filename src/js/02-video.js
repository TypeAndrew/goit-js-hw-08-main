import Player from '@vimeo/player';

let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);   


class VideoPlayer {
    iframe = document.querySelector('iframe');
    player = new Player(this.iframe);   
    currentTime;

    setUpdateWindow() {
        window.addEventListener("load", () => {
        console.log("load");

        console.log(event.target);
        this.player.muted = true;
        this.currentTime = localStorage.getItem("videoplayer-current-time");
        console.log(this.currentTime);
        this.player.setCurrentTime(this.currentTime).then(function(seconds) {
            // seconds = the actual time that the player seeked to
            seconds = this.currentTime;
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
    }

     updateTime()  {
        console.log(player);    
       this.currentTime = player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position
            console.log('time updated! ' + seconds + "  !!! " );
            localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function(error) {
        // an error occurred
        });
              
        
    };
     
    
    initVideo (){
        
        this.player.on('play', function () {
        console.log('played the video!');
        console.log(throttle);    
        
        });

        this.player.getVideoTitle().then(function(title) {
        console.log('title:', title);
        
         });

        this.setUpdateWindow();

         
        this.player.on('timeupdate', throttle(this.updateTime, 1000)); 
    
    }

   start() {
        this.initVideo();
    }

   
}

let iplayer = new VideoPlayer();
iplayer.initVideo();