"use strict";

import ArithmeticAndLogicUnitInterface from "../components/ArithmeticAndLogicUnit/Interface";
import ControlUnitInterface from "../components/ControlUnit/Interface";
import MemoryInterface from "../components/Memory/Interface";
import AddressBus from "../components/buses/AddressBus";
import { getContext } from "../components/Context";
import DataBus from "../components/buses/DataBus";

export default function indexPage() {
  const context = getContext();
  return (<center className="h-screen bg-cyan-500">
      <div className="bg-slate-900">
        <h1 className="pt-5 pb-7 text-white font-bold text-4xl">
          Arquitetura de Von Neumann
        </h1>
        <div className="h-2 bg-blue-700"/>
      </div>

			<div className="py-24 w-11/12">
				<AddressBus />
					<div className="flex justify-around gap-4">
						<MemoryInterface />
						<ControlUnitInterface />
						<ArithmeticAndLogicUnitInterface />
					</div>
					<DataBus />
			</div>

			<button onClick={() => {
        context.memory[2].isActive = true;
        context.setMemory(context.memory.slice());
				context.setControlUnit({
					data: "00100",
					command: "01",
					counter: "001",
				});
				console.log(context)
			}}>
				fsdfsdf
			</button>
  </center>);
}
