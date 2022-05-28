'use strict';

import { createContext, useContext, useState } from "react";
import MemoryCells from "./Memory/Memory";

export const Context = createContext(true);

export default function ContextProvider({ children }) {
  const [memory, setMemory] = useState(MemoryCells);
  const [addressBus, setAddressBus] = useState("000");
  const [dataBus, setDataBus] = useState("00000");
  const [controlUnit, setControlUnit] = useState({
    data: "00000",
    command: "00",
    counter: "000",
  });
  const [accumulator, setAccumulator] = useState("00000");

  return (
    <Context.Provider
      value={{
        memory, setMemory,
        addressBus, setAddressBus,
        dataBus, setDataBus,
        controlUnit, setControlUnit,
        accumulator, setAccumulator,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function getContext() {
  const ContextConsumer = useContext(Context);
  return ContextConsumer;
}