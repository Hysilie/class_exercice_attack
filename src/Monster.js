class Monster {
  constructor(name, damage, life) {
    this.name = name;
    this.damage = damage;
    this.life = life;
  }

  attack(enemy) {
    enemy.life = enemy.life - this.damage;
    if (enemy.life < 0) {
      console.log(` ${enemy.name} is KO!`);
    } else {
      console.log(`${enemy.name} has ${enemy.life} points remaining`);
    }
  }
}

export default Monster;
