import "../Components.css";

export default function Ventas() {
  return (
    <div>
      <table class="tableStock table-sm table-bordered align-middle mb-2">
        <thead>
          <tr>
            <th colSpan="6" class="bg-primary">
              VENTAS
            </th>
          </tr>
          <tr class="table-group-divider">
            <th class="bg-success" scope="col">Codigo</th>
            <th class="bg-success" scope="col">Marca</th>
            <th class="bg-success" scope="col">Modelo</th>
            <th class="bg-success" scope="col">Fecha Venta</th>
            <th class="bg-success" scope="col">Unidades</th>
            <th class="bg-success" scope="col">Precio Venta</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  );
}
