"use strict";

import CellInteface from "./CellInteface";
import { Context } from "../Context";
import { Component } from "react";

export default class MemoryInterface extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-2 border-gray-400 bg-white rounded-lg w-3/12">
        <div className="py-1 bg-slate-300 rounded-t-md">
          <p className="text-xl font-bold">Memória RAM</p>
        </div>

        <div className="ml-1 mr-9 mt-2 border py-1 rounded mb-1">
          <div className="grid grid-cols-3 divide-x font-bold">
            <p>Endereço</p>
            <p className="text-green-600">Comando</p>
            <p className="text-blue-600">Valor</p>
          </div>
        </div>

        <div className="overflow-y-auto scroll-m-2 h-64 pr-4 m-1">
          {this.context.memory.map((cell, index) => {
            return <CellInteface cell={cell}/>;
          })}
        </div>
      </div>
    );
  }
}