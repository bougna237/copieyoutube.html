// This file contains the JavaScript code specific to the video playback page, managing functionalities like play, pause, and volume control.

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const volumeControl = document.getElementById('volumeControl');

    playButton.addEventListener('click', function() {
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
    });

    volumeControl.addEventListener('input', function() {
        video.volume = volumeControl.value;
    });
});