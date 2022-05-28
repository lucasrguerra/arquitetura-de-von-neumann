'use strict';

import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Context } from "../Context";
import { Component } from "react";

export default class AddressBus extends Component {
  static contextType = Context;

  render() {
    return (<>
      <div className="rounded-full py-3 bg-blue-300">
        <center className="text-white text-3xl grid grid-cols-6">
            <h3 className="font-bold col-span-3">
              Barramento de Endereços
            </h3>
            <p></p>
            <p>
              {this.context.addressBus}
            </p>
        </center>
      </div>

      <div className="grid grid-cols-3 h-12">
        <div className="grid grid-cols-10">
          <p></p>
          <p></p>
          <div className="bg-blue-300 text-white pt-3">
            <FiArrowDown size={'1.6em'}/>
          </div>
        </div>
        <div className="grid grid-cols-10">
          <p></p>
          <p></p>
          <div className="bg-blue-300 text-white pt-3">
            <FiArrowUp size={'1.6em'}/>
          </div>
        </div>
      </div>
    </>)
  }
}