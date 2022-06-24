 export class Age {
   constructor(baseAge) {
    this.baseAge = baseAge;
 }
  mercuryAge() {
    let ageOnMercury = Math.round(this.baseAge / .24);
    return ageOnMercury;

  }
}
