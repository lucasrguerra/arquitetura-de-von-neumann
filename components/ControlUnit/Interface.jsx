"use strict";

import { FiArrowUp, FiArrowRight } from "react-icons/fi";
import { Context } from "../Context";
import { Component } from "react";

export default class ControlUnitInterface extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-2 border-gray-400 bg-white rounded-lg w-4/12">
        <div className="py-1 bg-slate-300 rounded-t-md">
          <p className="text-xl font-bold">Unidade de Controle</p>
        </div>

        <div className="grid grid-cols-3 pt-8 gap-4 mx-11 text-blue-600">
          <div className="border h-14 w-14 pt-3 mx-auto">
            {this.context.controlUnit.data}
          </div>
          <p className="col-span-2 font-bold">
            Registrador de <br /> Dado
          </p>
        </div>

        <div className="grid grid-cols-3 mx-10 my-3">
          <FiArrowUp className="col-span-1 mx-auto"/>
        </div>

        <div className="grid grid-cols-3 gap-4 mx-11 text-green-600">
          <div className="border h-14 w-14 pt-3 mx-auto">
            {this.context.controlUnit.command}
          </div>
          <p className="col-span-2 font-bold">
            Registrador de <br /> Comando
          </p>
        </div>

        <br />

        <div className="grid grid-cols-5 gap-3 mb-8 ml-14">
          <div className="relative pr-2">
            <FiArrowUp className="mt-1 mx-auto"/>
            <FiArrowRight className="absolute right-0"/>
          </div>
          <div className="border h-14 w-14 pt-3">
            {this.context.controlUnit.counter}
          </div>
          <p className="col-span-3 font-bold">
            Contador de <br /> Processos
          </p>
        </div>
      </div>
    );
  }
}