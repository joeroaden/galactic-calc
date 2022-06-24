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
    let ageOnMars = Math.round(this.baseAge / 1.88);
    return ageOnMars;
  }
  jupiterAge() {
    let ageOnJupiter = Math.round(this.baseAge / 11.86);
    return ageOnJupiter;
  }
  lifeOnEarth() {
    let avgLifeOnEarth = 73;
    return avgLifeOnEarth;

  }
  lifeLeftOnEarth() {
    let avgLifeOnEarth = 73;
    let myAge = 32;
    let lifeLeftOnEarth = Math.round(avgLifeOnEarth - myAge);
    return lifeLeftOnEarth

  }
}
