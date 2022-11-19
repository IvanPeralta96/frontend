import "../Components.css";

export default function Stock() {
  return (
    <div>
      <table class="tableStock table-sm table-bordered align-middle mb-2">
        <thead>
          <tr>
            <th colSpan="9" class="bg-primary">
              STOCK Y DIFERENCIA
            </th>
          </tr>
          <tr class="table-group-divider">
            <th class="bg-success" scope="col">Codigo</th>
            <th class="bg-success" scope="col">Marca</th>
            <th class="bg-success" scope="col">Modelo</th>
            <th class="bg-success" scope="col">Compras</th>
            <th class="bg-success" scope="col">Ventas</th>
            <th class="bg-success" scope="col">Stock</th>
            <th class="bg-success" scope="col">Valor Compras</th>
            <th class="bg-success" scope="col">Valor Ventas</th>
            <th class="bg-success" scope="col">Diferencia</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}
