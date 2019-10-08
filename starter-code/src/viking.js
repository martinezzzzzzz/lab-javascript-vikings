// Soldier
class Soldier {
    constructor(health, strength)  {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier{
    constructor(name) {
        this.name = name;
        super(this.health, this.strength);
    }
}

// Saxon
class Saxon {}

// War
class War {}
