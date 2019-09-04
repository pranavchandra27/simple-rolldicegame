import React, { Component } from "react";
import Dice from "./Dice";
import "./Rolldice.css";

let dice = ["one", "two", "three", "four", "five", "six"];

class Rolldice extends Component {
  state = { dice1: "one", dice2: "one", rolling: false };

  roll = e => {
    const newDice1 = dice[Math.floor(Math.random() * dice.length)],
      newDice2 = dice[Math.floor(Math.random() * dice.length)];

    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <div>
          <Dice face={this.state.dice1} isRolling={this.state.rolling} />
          <Dice face={this.state.dice2} isRolling={this.state.rolling} />
        </div>
        <button
          className="btn"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default Rolldice;
