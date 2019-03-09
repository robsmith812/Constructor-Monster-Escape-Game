var inquirer = require("inquirer");

function Human(Name) {
    this.Name = Name;
    this.Health = 50;
}

function Survivor(Name) {
    this.luckyNum = parseInt(Math.floor(Math.random() * 31));
    Human.call(this, name);
}

Survivor.prototype = Object.create(Human.prototype);

Survivor.prototype.escape = function () {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a number between 1 and 30!",
                name: "number",
            }
        ])
        .then(function (inquirerRespone) {
            return parseInt(inquirerRespone.number) == this.luckyNum ? true : false;
        })
}