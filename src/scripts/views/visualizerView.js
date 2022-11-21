export const visualizerView = () => {
   const vis = document.createElement("div");
   const screen = document.createElement("div"); 

   vis.classList.add('visualizer');      
   screen.classList.add('screen');
   vis.appendChild(screen);

   return vis
};