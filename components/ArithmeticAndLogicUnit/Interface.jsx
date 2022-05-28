"use strict";

import { Context } from "../Context";
import { Component } from "react";

export default class ArithmeticAndLogicUnitInterface extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-2 border-gray-400 bg-white rounded-lg w-4/12">
        <div className="py-1 bg-slate-300 rounded-t-md">
          <p className="text-xl font-bold">
            Unidade Lógica <br />
            e Aritmética
          </p>
        </div>

        <div className="mt-16">
          <p className="pb-1 font-bold">
            Acumulador
          </p>
          <div className="border h-24 w-24 pt-8 text-lg">
            {this.context.accumulator}
          </div>
        </div>
      </div>
    );
  }
}