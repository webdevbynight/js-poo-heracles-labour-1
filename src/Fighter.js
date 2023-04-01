/* Fighter class definition */

// Maximum lives
const MAX_LIFE = 100;

class Fighter
{
    #dexterity;
    #life;
    constructor(name, strength, dexterity, life = MAX_LIFE)
    {
        this.name = name;
        this.strength = strength;
        this.#dexterity = dexterity;
        this.#life = life;
    }
    getDexterity()
    {
        return this.#dexterity;
    }
    getLife()
    {
        return this.#life;
    }
    setLife(newPointsLife)
    {
        if (newPointsLife >= 0) this.#life = newPointsLife;
    }
    fight(opponent)
    {
        const opponentDexterity = opponent.getDexterity(); // The opponent’s dexterity
        let damagePoints = Math.ceil(Math.random() * this.strength), // Random damage points between 1 (included) and the fighter’s strength (included)
            opponentNewLifePoints = opponent.getLife(); // The opponent’s new life points to calculate (for now, they are equal to the opponent’s current ones)

        // Mitigate damage… in a way the damage points can never be below 0
        damagePoints -= opponentDexterity;
        if (damagePoints < 0) damagePoints = 0;

        // Calculate the opponent’s new life points… in a way the can never fall below 0 (and update)
        opponentNewLifePoints -= damagePoints;
        if (opponentNewLifePoints < 0) opponentNewLifePoints = 0;
        opponent.setLife(opponentNewLifePoints);

        return `${this.name} 🗡️  ${opponent.name} 💙  ${opponent.name}: ${opponent.getLife()}`;
    }
    isAlive()
    {
        return (this.#life > 0)? true: false;
    }
}

export default Fighter;