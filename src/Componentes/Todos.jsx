import "../Components.css";
import Compras from "./Compras";
import Stock from "./Stock";
import Ventas from "./Ventas";

export default function Todos() {
  return (
    <div class="row">
      <div class="col">
        <Compras />
      </div>
      <div class="col">
        <Ventas />
      </div>
      <div class="col">
        <Stock />
      </div>
    </div>
  );
}
