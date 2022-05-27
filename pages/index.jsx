"use strict";

import ControlUnitInterface from "../components/ControlUnit/Interface";
import MemoryInterface from "../components/Memory/Interface";
import AddressBus from "../components/buses/AddressBus";
import DataBus from "../components/buses/DataBus";

export default function indexPage() {
  return (<center className="h-screen bg-cyan-500">
      <div className="bg-slate-900">
        <h1 className="pt-5 pb-7 text-white font-bold text-4xl">
          Arquitetura de Von Neumann
        </h1>
        <div className="h-2 bg-blue-700"/>
      </div>

     <div className="py-24 w-11/12">
       <AddressBus />
        <div className="flex justify-around">
          <MemoryInterface />
          <ControlUnitInterface />
          <MemoryInterface />
        </div>
        <DataBus />
     </div>
  </center>);
}
