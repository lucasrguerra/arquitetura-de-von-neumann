"use strict";

import Commands from "../Commands";
import { Component } from "react";

export default class CellInteface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: this.props.cell.command,
      value: this.props.cell.value,
    }
  }

  componentDidUpdate() {
    this.props.cell.updateCommand(this.state.command);
    this.props.cell.updateValue(this.state.value);
    return;
  }

  formatToValidNumber(input = Number) {
    input = parseInt(input);
    if (input >= 0 && input <= 9999) {
      return input;
    } else if (input < 0) {
      return input * -1;
    } else if (input > 9999) {
      return 9999;
    } else {
      return "";
    }
  }

  render() {
    let options = Commands.map((command) => {
      return <option value={command.value}>{command.name}</option>;
    });

    let color = this.props.cell.isActive ? "bg-yellow-500" : "";

    return (
      <div className={`border py-1 rounded mb-1 ${color}`}>
        <div className="grid grid-cols-3 divide-x">
          <p className="font-semibold">{this.props.cell.address}</p>

          <div className="relative">
            <select
              className="bg-transparent"
              value={Commands[this.props.cell.command].value}
              onChange={() => {}}
            >
              { options }
            </select>

            <select
              className="absolute left-0 w-full opacity-0 bg-transparent"
              value={Commands[this.props.cell.command].value}
              onSelect={(event) => {
                event.target.classList.replace("opacity-0", "opacity-100");
              }}
              onBlur={(event) => {
                event.target.classList.replace("opacity-100", "opacity-0");
                this.forceUpdate();
              }}
              onClick={() => {
                this.forceUpdate();
              }}
              onChange={(event) => {
                this.setState({
                  command: parseInt(event.target.value),
                });
              }}
            >
              { options }
            </select>
          </div>

          <div className="relative">
            { this.props.cell.value }
            <input
              className="absolute text-center left-0 w-full opacity-0 text-blue-600"
              type={"number"}
              value={this.state.value}
              pattern="[0-9]{4}"
              onSelect={(event) => {
                event.target.classList.replace("opacity-0", "opacity-100");
              }}
              onBlur={(event) => {
                event.target.classList.replace("opacity-100", "opacity-0");
                this.forceUpdate();
              }}
              onClick={() => {
                this.forceUpdate();
              }}
              onChange={(event) => {
                this.setState({
                  value: this.formatToValidNumber(event.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}