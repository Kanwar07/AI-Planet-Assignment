import React, { createContext, useContext, useState } from "react";

const Contextdata = createContext<any>(undefined);

export function Context({ children }: { children: React.ReactNode }) {
  let [name, setName] = useState("");

  return (
    <Contextdata.Provider value={{ name, setName }}>
      {children}
    </Contextdata.Provider>
  );
}

export function useContextdata() {
  return useContext(Contextdata);
}
