class Character {
  constructor (attackPower, health) {
    this.attackPower = attackPower;
    this.health = health;
  }
attack(opposingPlayer) {
        if (Math.random() > 0.5)  {
        opposingPlayer.health --;
        this.attackPower --;
        }
    }
  }

class Blue extends Character {
  constructor (attackPower, health) {
    super(attackPower, health);
    this.color = 'blue';
  }
}
class Red extends Character {
  constructor (attackPower, health) {
    super(attackPower, health);
    this.color =  'red';
  }
}
//const winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
//const newArr = winnerArr.map((element, index) => ({winner: element}));

const firstBlue = new Blue(15, 10);
const firstRed = new Red(15, 10);

function battle(playerOne, playerTwo) {
  let first = arguments[Math.random().toFixed()];
  let second;
  let flip = true;
    if (playerOne === first) second = playerTwo;
    else second = playerOne;

    while (playerOne.health > 0 || playerTwo.health > 0) {
        if (flip) {
          if (first.attackPower > 0) {
            first.attack(second);
            flip = !flip;
          }
          else {
            break;
          }
        }
        else if (second.attackPower > 0) {
                second.attack(first);
                flip = !flip;
             }
             else {
               break;
             }
    }
    if (first.health === 0 || first.attackPower === 0) {
      console.log(`${second.color}  won!`) ;
      return second.color;
    }
    else {
      console.log(`${first.color}  won!`);
      return first.color;
    }
}

function battles(n) {
  const counter = n;
  const winnerArr = [];

  for (let i =0; i < n; i ++) {
    let winner = battle(firstBlue, firstRed);
     winnerArr.push({winner});
  }
  console.log('WINNERS: ', winnerArr);
}
battles(5);

function returnNumberSum(x,y,z){
    console.log(x + y + z);
}

returnNumberSum(...[1,8,7]);

console.log('I am working');
