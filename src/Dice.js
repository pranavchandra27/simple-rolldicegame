import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    const { face, isRolling } = this.props;
    const dice = `icon fas fa-dice-${this.props.face} fa-6x
    ${isRolling ? "shake" : ""}`;
    return <i className={dice}></i>;
  }
}

export default Dice;
