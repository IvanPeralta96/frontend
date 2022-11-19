import React from "react";
import Compras from "./Compras";
import Stock from "./Stock";
import Ventas from "./Ventas";

export default function Todos() {
  return (
    <div class="row">
      <div class="col-sm-6">
        <Compras />
      </div>
      <div class="col-sm-6">
        <Ventas />
      </div>
      <div class="col-sm-6">
        <Stock />
      </div>
    </div>
  );
}
