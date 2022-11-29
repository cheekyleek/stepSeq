export const visView = () => {
   const visualizer = document.createElement("div");
   const screen = document.createElement("div");
   const waveformImage = document.createElement("canvas");

   visualizer.classList.add('visualizer');      
   screen.classList.add('screen');
   waveformImage.classList.add('waveform-image');
   screen.appendChild(waveformImage);
   visualizer.appendChild(screen);

   return visualizer
};