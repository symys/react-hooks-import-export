import React from "react";
import howManyParks from "./parks/howManyParks";
import { MesaVerde as MesaVerdePark } from "./parks/MesaVerde.js";
// import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  return (
    <div>
      <MesaVerdePark />
      <h1>Colorado State Parks!</h1>
    </div>
  );
   
}

export default ColoradoStateParks;
