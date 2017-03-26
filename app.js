'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opposingPlayer) {
      if (Math.random() > 0.5) {
        opposingPlayer.health--;
        this.attackPower--;
      }
    }
  }]);

  return Character;
}();

var Blue = function (_Character) {
  _inherits(Blue, _Character);

  function Blue(attackPower, health) {
    _classCallCheck(this, Blue);

    var _this = _possibleConstructorReturn(this, (Blue.__proto__ || Object.getPrototypeOf(Blue)).call(this, attackPower, health));

    _this.color = 'blue';
    return _this;
  }

  return Blue;
}(Character);

var Red = function (_Character2) {
  _inherits(Red, _Character2);

  function Red(attackPower, health) {
    _classCallCheck(this, Red);

    var _this2 = _possibleConstructorReturn(this, (Red.__proto__ || Object.getPrototypeOf(Red)).call(this, attackPower, health));

    _this2.color = 'red';
    return _this2;
  }

  return Red;
}(Character);
//const winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
//const newArr = winnerArr.map((element, index) => ({winner: element}));

var firstBlue = new Blue(15, 10);
var firstRed = new Red(15, 10);

function battle(playerOne, playerTwo) {
  var first = arguments[Math.random().toFixed()];
  var second = void 0;
  var flip = true;
  if (playerOne === first) second = playerTwo;else second = playerOne;

  while (playerOne.health > 0 || playerTwo.health > 0) {
    if (flip) {
      if (first.attackPower > 0) {
        first.attack(second);
        flip = !flip;
      } else {
        break;
      }
    } else if (second.attackPower > 0) {
      second.attack(first);
      flip = !flip;
    } else {
      break;
    }
  }
  if (first.health === 0 || first.attackPower === 0) {
    console.log(second.color + '  won!');
    return second.color;
  } else {
    console.log(first.color + '  won!');
    return first.color;
  }
}

function battles(n) {
  var counter = n;
  var winnerArr = [];

  for (var i = 0; i < n; i++) {
    var winner = battle(firstBlue, firstRed);
    winnerArr.push({ winner: winner });
  }
  console.log('WINNERS: ', winnerArr);
}
battles(5);

function returnNumberSum(x, y, z) {
  console.log(x + y + z);
}

returnNumberSum.apply(undefined, [1, 8, 7]);

console.log('I am working');
