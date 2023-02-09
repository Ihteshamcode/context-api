import React from "react";
import { useContext } from "react";
import { AppContext } from "./UseContext";

const Child3 = () => {
  const name = useContext(AppContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Child3;
