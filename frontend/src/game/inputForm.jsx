import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.props.onSubmit(event);
  }

  handleInputChange(event) {
    this.props.onInputChange(event.target);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            How many games do you want to run (max 10000)?
              <input
              name="numberOfGames"
              type="number"
              min="1"
              max="10000"
              value={this.props.numberOfGames}
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Do you want to change the door?
              <input
              name="isChangingDoor"
              type="checkbox"
              checked={this.props.isChangingDoor}
              onChange={this.handleInputChange} />
          </label>
        </div>
        <input className="submit" type="submit" value="Let's play!"></input>
      </form>
    );
  }
}

export default InputForm;