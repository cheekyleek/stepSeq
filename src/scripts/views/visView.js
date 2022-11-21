export const visView = () => {
   const visualizer = document.createElement("div");
   const screen = document.createElement("div"); 

   visualizer.classList.add('visualizer');      
   screen.classList.add('screen');
   visualizer.appendChild(screen);

   return visualizer
};