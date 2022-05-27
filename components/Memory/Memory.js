"use strict";

class MemoryCell {
  constructor(address) {
    this.address = address;
    this.command = 0;
    this.value = 0;
    this.isActive = false;
  }

  updateCommand(command) {
    return this.command = command;
  }

  updateValue(value) {
    return this.value = value;
  }
}

const Memory = Array(1000).fill("").map((_, index) => {
  let address = index > 99 ? index : `0${index}`;
  address = address > 9 ? address : `0${address}`
  return new MemoryCell(address);
});

export default Memory;