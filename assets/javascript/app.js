
var _app = function ()
{
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.2;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "You’ve got to always go back in time if you want to move forward",
        "Worst comes to worst, my peoples come first",
        " I am tired of talk that comes to nothing",
        "Overnight skilled player",
        "Alcohol abuser",
        "#4292"
    ];

}

var app = new _app();
