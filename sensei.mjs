import Ninja from './ninja.mjs';

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("A wise message from Sensei...")
    }
}

export default Sensei;
