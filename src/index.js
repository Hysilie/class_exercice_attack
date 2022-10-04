import Monster from "./Monster";

const Piout = new Monster("Piout", 5, 30);
const Miaout = new Monster("Miaout", 3, 90);

while (Piout.life > 0 && Miaout.life > 0) {
  Miaout.attack(Piout);
  Piout.attack(Miaout);
}
