export class Age {
  constructor(baseAge) {
    this.baseAge = baseAge;
  }
  mercuryAge() {
    let ageOnMercury = Math.round(this.baseAge / 0.24);
    return ageOnMercury;
  }
  venusAge() {
    let ageOnVenus = Math.round(this.baseAge / 0.62);
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
    return lifeLeftOnEarth;
  }
  lifeLeftOnMercury() {
    let avgLifeOnEarth = 73;
    let myAge = 32;
    let lifeLeftOnEarth = Math.round(avgLifeOnEarth - myAge);
    let lifeLeftMercury = Math.round(lifeLeftOnEarth / .24);
    return lifeLeftMercury;
  }
  lifeLeftOnVenus() {
    let avgLifeOnEarth = 73;
    let myAge = 32;
    let lifeLeftOnEarth = Math.round(avgLifeOnEarth - myAge);
    let lifeLeftVenus = Math.round(lifeLeftOnEarth / .62);
    return lifeLeftVenus;
  }
  lifeLeftOnMars() {
    let avgLifeOnEarth = 73;
    let myAge = 32;
    let lifeLeftOnEarth = Math.round(avgLifeOnEarth - myAge);
    let lifeLeftMars = Math.round(lifeLeftOnEarth / 1.88);
    return lifeLeftMars
  }
  lifeLeftOnJupiter () {
    let avgLifeOnEarth = 73;
    let myAge = 32;
    let lifeLeftOnEarth = Math.round(avgLifeOnEarth - myAge);
    let lifeLeftJupiter = Math.round(lifeLeftOnEarth / 11.86);
    return lifeLeftJupiter
  }
  lifeExpectancy () {
    
  }
}
