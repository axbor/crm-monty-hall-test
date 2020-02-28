import React, { Component } from "react";

class ListItems extends Component {
  render() {
    if (!this.props.items || (this.props.items && this.props.items.length === 0)) {
      return null;
    }

    const listItems = this.props.items.map((victory, index) =>
      <li key={index}>{victory ? "win" : "loss"}</li>
    );

    return (
      <div>
        <ol>{listItems}</ol>
      </div>
    );
  }
}

export default ListItems;