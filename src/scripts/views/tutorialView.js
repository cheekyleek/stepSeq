export const tutorialView = () => {
   const tutorial = document.getElementsByClassName("tutorial-container")[0];
   const tutorialStart = document.getElementsByClassName("tutorial-start-button")[0];
   const tutorialFocus = document.createElement("div");
   const messageContainer = document.createElement("div");
   const tutorialMessage = document.createElement("p");
   const nextButton = document.createElement("div");
   const backButton = document.createElement("div");
   const skipButton = document.createElement("div");
   const pageCounter = document.createElement("p");
   const grid = document.getElementsByClassName("grid")[0];
   const drumSelector = document.getElementById("drums-selector");
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
   backButton.style.opacity = "0";
   skipButton.classList.add("tutorial-button");
   skipButton.setAttribute("id", "skip-button");
   skipButton.innerHTML = "skip tutorial";
   pageCounter.classList.add("page-counter");

   const initialMessaage = `Welcome to stepSeq!` + `<br /><br />` + 
   `A step sequencer is a grid-based device that lets the player pick which 
   musical beats they would like their sounds to be played on in a loop...`

   tutorialMessage.innerHTML = initialMessaage;
   // Here we can hear the common "4 on the floor" kick drum beat. /// add when example sequence is in
   const tutorialMessages = {
      1: `This grid has 8 rows of 32 steps, representing a 2 bar phrase of
         4/4 time in musical terms. Here, we can choose where we want to place 
         the sounds we want to hear!`,
      2: `If you click on a step, it will ready that step, and as the loop, well,
         LOOPS.. it will then activate that step.`,
      3: `This is a track. Each track on the grid has a different sound 
         associated with it. This one belongs to the kick drum.`,
      4: `Over here are the controls for the sound banks. You can switch between 
         drums, synthesizer, sound effects, or adding your own custom samples into 
         the mix (disclaimer: custom sample functionality coming soon!). Selecting a 
         different sound bank will not get rid of the steps you selected in a 
         previous grid, so don't worry.`,
      5: `The center controls are where your standard play and stop buttons exists, 
         along with some other neat features...`,
      6: `You can adjust the bpm, or "beats per minute", of your sequence with the 
         left and right arrows here. Caffeinated rug cutter? Slowww danncee foorr 
         snaaaailllss? Your choice!`,
      7: `If you aren't really digging the groove, just clear it out entirely with
          - you guessed it - the clear button.`,
      8: `This button may not seem like much at first glance, but with just one click..`,
      9: `BOOM! A whole new world opens before you. This is the effects rack. Here you 
         have 5 different ways to change the sounds as they play, and can bring the 
         volume down with the "gain" slider. Just click and drag up / down on any of 
         the sliders to really throw some spice on it. Go nuts!`,
      10: `Last but not least, here is the visualizer. As your musical creation plays, 
         you can witness the many fluctuating frequencies you carefully craft dance around. 
         As YOU dance around!`,
      11: `Enjoy :)`
   }

   messageContainer.appendChild(tutorialMessage);
   messageContainer.appendChild(backButton);
   messageContainer.appendChild(nextButton);
   tutorial.appendChild(pageCounter);
   tutorial.appendChild(messageContainer);
   tutorial.appendChild(tutorialFocus);
   tutorial.appendChild(skipButton);

   let currentTutPage = 0;

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
      visualizer,
      tutorial
   ];

   let referenceElement;

   nextButton.addEventListener("click", () => {                              // MESS WITH THIS
      currentTutPage += 1;
      if (currentTutPage === 1) {
         drumSelector.click();
      }
      if (currentTutPage === 12) {
         fxRack.setAttribute("folded", "true");
         tutorial.style.zIndex = -10;
         tutorialStart.style.opacity = 1;
         nextButton.innerHTML = "next";
         return null;
      }
      if (currentTutPage === 8) {
         fxRack.setAttribute("folded", "false");
      }
      referenceElement = tutorialFlow[currentTutPage].getBoundingClientRect();

      if (currentTutPage !== 0 && currentTutPage !== 11) {
         tutorialFocus.style.opacity = 1;
         tutorialFocus.style.top = referenceElement.top + "px";
         tutorialFocus.style.width = referenceElement.width + "px";
         tutorialFocus.style.height = referenceElement.height + "px";
         tutorialFocus.style.left = referenceElement.left + "px";

         messageContainer.style.left = (messageContainer.width - referenceElement.width) + "px";
         messageContainer.style.top = (referenceElement.top - 300) + "px";
         tutorialMessage.style.fontSize = 30 + "px";
         nextButton.style.fontSize = 30 + "px";
         backButton.style.fontSize = 30 + "px";
      }
      if (currentTutPage === 6) {
         tutorialFocus.style.width = 4 * referenceElement.width + "px";
         tutorialFocus.style.left = referenceElement.left - (1.5 * referenceElement.width) + "px";
      }
      if (currentTutPage === 11) {
         tutorialMessage.style.fontSize = "3rem";
         skipButton.style.opacity = 0;
         nextButton.innerHTML = "play!"
         nextButton.style.fontSize = "calc(.5rem + 2vw)";
         backButton.style.fontSize = "calc(.5rem + 2vw)";
         tutorialFocus.style.width = 0;
         tutorialFocus.style.height = 0;
         messageContainer.style.top = "26rem";
      }
      backButton.style.opacity = "1";
      tutorialMessage.innerHTML = tutorialMessages[currentTutPage];
   })

   backButton.addEventListener("click", () => {
      currentTutPage -= 1;
      if (currentTutPage < 8) {
         fxRack.setAttribute("folded", "true");
      }
      referenceElement = tutorialFlow[currentTutPage].getBoundingClientRect();
      
      if (currentTutPage !== 0) {
         tutorialFocus.style.top = referenceElement.top + "px";
         tutorialFocus.style.width = referenceElement.width + "px";
         tutorialFocus.style.height = referenceElement.height + "px";
         tutorialFocus.style.left = referenceElement.left + "px";

         messageContainer.style.left = (messageContainer.width - referenceElement.width) + "px";
         messageContainer.style.top = (referenceElement.top - 300) + "px";
         tutorialMessage.style.fontSize = 30 + "px";
         nextButton.style.fontSize = 30 + "px";
         backButton.style.fontSize = 30 + "px";
      }
      if (currentTutPage === 6) {
         tutorialFocus.style.width = 4 * referenceElement.width + "px";
         tutorialFocus.style.left = referenceElement.left - (1.5 * referenceElement.width) + "px";
      }
      if (currentTutPage === 0) {
         backButton.style.opacity = "0";
         tutorialMessage.innerHTML = initialMessaage;
         messageContainer.style.left = "";
         messageContainer.style.top = "";
         tutorialMessage.style.fontSize = "calc(1rem + 2vw)";
         nextButton.style.fontSize = "calc(.5rem + 2vw)";
         backButton.style.fontSize = "calc(.5rem + 2vw)";
         tutorialFocus.style.width = 0;
         tutorialFocus.style.height = 0;
      } else {
         tutorialMessage.innerHTML = tutorialMessages[currentTutPage];
      }
      nextButton.innerHTML = "next";
   })

   skipButton.addEventListener("click", () => {
      tutorial.style.zIndex = -10;
      tutorialStart.style.opacity = 1;
      drumSelector.click();
   })

   tutorialStart.addEventListener("click", () => {
      tutorialStart.style.opacity = 0;
      tutorial.style.zIndex = 10;
      currentTutPage = 0;
      backButton.style.opacity = "0";
      tutorialMessage.innerHTML = initialMessaage;
      messageContainer.style.left = "";
      messageContainer.style.top = "";
      tutorialMessage.style.fontSize = "calc(1rem + 2vw)";
      nextButton.style.fontSize = "calc(.5rem + 2vw)";
      backButton.style.fontSize = "calc(.5rem + 2vw)";
      tutorialFocus.style.width = 0;
      tutorialFocus.style.height = 0;
   })

   window.addEventListener("resize", () => {
      referenceElement = tutorialFlow[currentTutPage].getBoundingClientRect();
      if (currentTutPage !== 0 & currentTutPage !== 11) {
         tutorialFocus.style.top = referenceElement.top + "px";
         tutorialFocus.style.width = referenceElement.width + "px";
         tutorialFocus.style.height = referenceElement.height + "px";
         tutorialFocus.style.left = referenceElement.left + "px";

         messageContainer.style.left = (messageContainer.width - referenceElement.width) + "px";
         messageContainer.style.top = (referenceElement.top - 300) + "px";
      }
      if (currentTutPage === 6) {
         tutorialFocus.style.width = 4 * referenceElement.width + "px";
         tutorialFocus.style.left = referenceElement.left - (1.5 * referenceElement.width) + "px";
      }
   })


};