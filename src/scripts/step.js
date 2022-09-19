class Step {
   constructor(stepID, pitch = 50, velocity = 100, glide = false) {
      this.stepID = stepID;
      this.pitch = pitch;
      this.velocity = velocity;
      this.glide = glide;
      this.isActive = false;
   }


}






export default Step;
