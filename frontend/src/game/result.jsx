import React, { Component } from "react";

import ListItems from "./listItems";

class Result extends Component {
  render() {
    const gameResult = this.props.gameResult;
    if (!gameResult || (gameResult && gameResult.length === 0)) {
      return null;
    }

    const wins = gameResult.filter((result) => result).length;
    const losses = gameResult.length - wins;
    const percentage = wins / gameResult.length * 100;

    return (
      <div className="result">
          <div>
            <div>Result: {wins} wins and {losses} losses</div>
            <div>Win percentage: {percentage}%</div>
            <ListItems items={gameResult} />
          </div>
      </div>
    );
  }
}

export default Result;