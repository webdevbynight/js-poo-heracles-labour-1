// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import Fighter from './src/Fighter.js';

// Fighters
const hero = new Fighter('🧔 Heracles', 20, 6),
    lion = new Fighter('🦁 Nemean Lion', 11, 13);

// Ready? Fight!
let round = 1;
while(true)
{
    console.info(`⏲️  Round #${round}`);
    console.log(hero.fight(lion));
    console.log(lion.fight(hero));

    // If one of the fighters has no life any more, end up with the fight
    if (!hero.isAlive() || !lion.isAlive()) break;

    // Otherwise, new round
    round ++;
}

// We have a winner!
console.log(`💀 ${(!hero.isAlive())? hero.name: lion.name} is dead`);
console.log(`🏆 ${(hero.isAlive())? hero.name: lion.name} wins (💙 ${(hero.isAlive())? hero.getLife(): lion.getLife()})`);