// import * as Tone from 'tone';

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3", 
    "#e48f2f", 
    "#257206",
    "#e42f2f",
    "#7a7a7a",
    "#652fe4",
    "#0e35e4",
    "#f9fd00",
    "#e42fb7",
    "#ff95e8",
    "#2fa2e4",
    "#006308a1",
    "#49005c",
    "#4de42f",
    "#8ef4ff",
    "#eb615c",
    "#8e6fff",
    "#ffffff",
    "#15c505",
    "#2fe48f",
  ];


// Create sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);


    });

  });

// Create bubbles
  const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };


});


