 export class Age {
   constructor(baseAge) {
    this.baseAge = baseAge;
 }
  mercuryAge() {
    let ageOnMercury = Math.round(this.baseAge / .24);
    return ageOnMercury;
  }
  venusAge() {
    let ageOnVenus = Math.round(this.baseAge / .62);
    return ageOnVenus;
  }
  marsAge() {
    
  }
}
