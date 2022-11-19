import "../Components.css";

export default function Compras() {
  return (
    <div>
      <table class="tableStock table-sm table-bordered align-middle mb-2">
        <thead>
          <tr>
            <th colSpan="8" class="bg-primary">
              COMPRAS
            </th>
          </tr>
          <tr class="table-group-divider">
            <th class="bg-success" scope="col">Codigo</th>
            <th class="bg-success" scope="col">Marca</th>
            <th class="bg-success" scope="col">Modelo</th>
            <th class="bg-success" scope="col">Fecha Compra</th>
            <th class="bg-success" scope="col">Precio Compra</th>
            <th class="bg-success" scope="col">Unidades</th>
            <th class="bg-success" scope="col">Total</th>
            <th class="bg-success" scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  );
}
