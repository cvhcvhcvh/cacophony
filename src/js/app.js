// import * as Tone from 'tone';

window.addEventListener("load", () => {
  const beats = document.querySelectorAll(".beat");
  const dots = document.querySelectorAll(".dots div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#920000",
    "#b90000",
    "#ff0000",
    "#f53131",
    "#ffc400",
    "#fffb00",
    "#ffee00",
    "#88ff00",
    "#1eff00",
    "#00ff6a",
    "#00ffd5",
    "#00f5fd",
    "#00ccff",
    "#0084ff",
    "#0059ff",
    "#1900ff",
    "#4c00ff",
    "#9900ff",
    "#8500b9",
    "#e100ff",
    "#ff00c8",
    "#ff004c",
  ];



  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      beats[index].currentTime = 0;
      beats[index].play();
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


