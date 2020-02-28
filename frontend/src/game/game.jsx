import React, { Component } from "react";
import axios from 'axios';

import InputForm from './inputForm';
import Result from './result';
import './game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGames: 100,
      isChangingDoor: false,
      gameResult: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    this.playGame()
    event.preventDefault();
  }

  handleInputChange = (target) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  playGame = () => {
    axios.get("game", {
      params: {
        "numberOfGames": this.state.numberOfGames,
        "changeDoor": this.state.isChangingDoor
      }
    })
      .then(res => {
        this.setState({ gameResult: res.data });
      })
      .catch(res => {
        console.log(res);
        this.setState({ result: "Failed to get game result from backend" });
      });
  }

  render() {
    return (
      <div className="game">
        <InputForm
          numberOfGames={this.state.numberOfGames}
          isChangingDoor={this.state.isChangingDoor}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
        <Result
          gameResult={this.state.gameResult}
        />
      </div >
    );
  }
}

export default Game;