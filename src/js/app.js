const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound button");
const timeShown = document.querySelector(".time-shown");
const time = document.querySelectorAll(".time button");
let timeSpan = 600;

timeShown.textContent = `${Math.floor(timeSpan / 60)}:${Math.floor(
  timeSpan % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    check(song);
  });
});

play.addEventListener("click", () => {
  check(song);
});

const restart = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
}

time.forEach(option => {
  option.addEventListener("click", function() {
    timeSpan = this.getAttribute("data-time");
    timeShown.textContent = `${Math.floor(timeSpan / 60)}:${Math.floor(
      timeSpan % 60
    )}`;
  });
});

const check = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = timeSpan - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeShown.textContent = `${minutes}:${seconds}`;

  if (currentTime >= timeSpan) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};