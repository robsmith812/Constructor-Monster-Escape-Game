var inquirer = require("inquirer");

function Human(Name, Health) {
    this.Name = Name;
    this.Health = Health;
}

function Survivor(Name, Health) {
    this.luckyNum = parseInt(Math.floor(Math.random() * 31));
    Human.call(this, Name, Health);
}

Survivor.prototype = Object.create(Human.prototype);

Survivor.prototype.escape = function () {

    var thisSurvivor = this;

    return inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a number between 1 and 30!",
                name: "number",
            }
        ])
        .then(function (inquirerRespone) {
            var guess = parseInt(inquirerRespone.number);
            var val;

            if (guess == thisSurvivor.luckyNum) {
                console.log('So Lucky')
                val = true;
            }
            else {
                console.log('Not so Lucky')
                val = false;
            }
            return val;
        })
}

function Monster(Name, Health, Attack) {
    this.Attack = Attack;
    Human.call(this, Name, Health);
}

Monster.prototype = Object.create(Human.prototype);

Monster.prototype.attack = function () {
    var ranAttkNum = Math.floor(Math.random() * 6)

    if (ranAttkNum == 3) return false;
    else return true;
}

var monsterOne = new Monster('Bahamut', 100, 5);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        }
    ])
    .then(function (inquirerRespone) {
        var survivor = new Survivor(inquirerRespone.name, 50);

        function callEscape() {
            survivor.escape().then(function (res) {
                var esc = res;

                if (esc) {
                    console.log('You got away!');
                    return;

                } else {
                    var a = monsterOne.attack();

                    if (a != false) {
                        survivor.Health -= monsterOne.Attack;

                        console.log(`You lost ${monsterOne.Attack} health and now you have ${survivor.Health} remaining.`)
                        return;
                    } else {
                        console.log("You dodged the attack!");
                        return;
                    }
                }
            });
        }

        setInterval(callEscape, 5 * 1000);

        if (survivor.Health <= 0) {
            console.log(`${monsterOne.Name} has captured you!`)
        }
    });