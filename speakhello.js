(function (window) {
    var hellospeaker = {};
    var speakworld = "Hello";

    hellospeaker.speak = function (name) {
        console.log(speakworld + " " + name);

    }
    window.hellospeaker = hellospeaker;

})(window);
