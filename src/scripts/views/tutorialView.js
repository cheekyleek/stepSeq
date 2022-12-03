export const tutorialView = () => {
   const tutorial = document.getElementsByClassName("tutorial-container")[0];
   const tutorialFocus = document.createElement("div");
   const messageContainer = document.createElement("div");
   const tutorialMessage = document.createElement("p");
   const nextButton = document.createElement("div");
   const backButton = document.createElement("div");
   const skipButton = document.createElement("div");
   const pageCounter = document.createElement("p");
   const grid = document.getElementsByClassName("grid")[0];
   const step = document.getElementsByClassName("step")[0];
   const track = document.getElementsByClassName("track")[0];
   const rightControls = document.getElementById("right-controls");
   const centerControls = document.getElementById("center-controls");
   const bpmArea = document.getElementById("bpm-readout");
   const clearButton = document.getElementById("clear-button");
   const fxFolder = document.getElementById("fx-folder");
   const fxRack = document.getElementsByClassName("fx-rack")[0];
   const visualizer = document.getElementsByClassName("visualizer")[0];

   tutorialFocus.classList.add("tutorial-focus");
   messageContainer.classList.add("message-container");
   tutorialMessage.classList.add("tutorial-message");
   nextButton.classList.add("tutorial-button");
   nextButton.setAttribute("id", "next-button");
   nextButton.innerHTML = "next";
   backButton.classList.add("tutorial-button");
   backButton.setAttribute("id", "back-button");
   backButton.innerHTML = "back";
   skipButton.classList.add("tutorial-button");
   skipButton.setAttribute("id", "skip-button");
   skipButton.innerHTML = "skip tutorial";
   pageCounter.classList.add("page-counter");

   tutorialMessage.innerHTML = `Welcome to stepSeq!` + `<br /><br />` + 
   `A step sequencer is a grid-based device that lets the player pick which 
   musical beats they would like their sound samples to be played on over a loop...`

   messageContainer.appendChild(tutorialMessage);
   messageContainer.appendChild(backButton);
   messageContainer.appendChild(nextButton);
   tutorial.appendChild(pageCounter);
   tutorial.appendChild(messageContainer);
   tutorial.appendChild(skipButton);

   const tutorialFlow = [
      tutorial,
      grid,
      step,
      track,
      rightControls,
      centerControls,
      bpmArea,
      clearButton,
      fxFolder,
      fxRack,
      visualizer
   ];

   nextButton.addEventListener("click", () => {

   })


};