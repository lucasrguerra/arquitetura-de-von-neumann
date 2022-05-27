"use strict";

import { Context } from "../Context";
import { Component } from "react";

export default class ControlUnitInterface extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-2 border-gray-400 bg-white rounded-lg w-3/12">
        <div className="py-1 bg-slate-300 rounded-t-md">
          <p className="text-xl font-bold">Unidade de Controle</p>
        </div>

        <div className="grid grid-cols-3 gap-4 m-8">
          <div className="border h-14 w-14 pt-3">
            {this.context.controlUnit.data}
          </div>
          <p className="col-span-2">
            Registrador de <br /> Dado
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 m-8">
          <div className="border h-14 w-14 pt-3">
            {this.context.controlUnit.instruction}
          </div>
          <p className="col-span-2">
            Registrador de <br /> Instrução
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 m-8">
          <div className="border h-14 w-14 pt-3">
            {this.context.controlUnit.counter}
          </div>
          <p className="col-span-2">
            Contador de <br /> Processos
          </p>
        </div>
      </div>
    );
  }
}