const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');

    // sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    // Time displat
    const timeDisplay = document.querySelector('.time-display');
    // get the length of the outline
    const outlineLength = outline.getTotalLength();
    // Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    // Create a function specific to stop and play the song/sounds
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = '../svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = '../svg/play.svg';
        }
    }
}
