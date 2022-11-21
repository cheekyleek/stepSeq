class View {
   constructor(unit, seq, bar) {  //, seq, fx, rec, vis
      this.unit = unit;
      this.seq = seq;
      this.controlBar = bar;
      // this.fx = fx;
      // this.rec = rec;
      // this.vis = vis;

      // const newFX = this.setupFX();
      // const newRec = this.setupRec();
      // const newVis = this.setupVis();
      

      unit.appendChild(this.controlBar);
      unit.appendChild(this.seq);
      // unit.appendChild(newFX);
      // unit.appendChild(newRec);
      // unit.appendChild(newVis);
      setupStepListeners(MG);

      return unit;
   }
}