import axios from "axios";
import { useEffect, useState } from "react";
import "../Components.css";

export default function Compras() {
  const [APIData, setAPIData] = useState([]);
  
  const getData = () => {
    axios.get("http://localhost:4000/Compras").then((getData) => {
      setAPIData(getData.data);
    });
  };
  
  useEffect(() => {
    axios.get("http://localhost:4000/Compras").then((response) => {
      
      setAPIData(response.data);
    });
  }, []);
  return (
    <div>
      <table class="tableStock table-sm table-bordered mb-2">
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
        
        {APIData.map((data) => {
            
            return (
              <tr>
                <th>{data.codigo}</th>
                <th>{data.marca}</th>
                <th>{data.modelo}</th>
                <th>{data.fecha_compra}</th>
                <th>{data.precio_compra}</th>
                <th>{data.unidades}</th>
                <th>{data.total}</th>
                <th>{data.descripcion}</th>
             
              </tr>
            );
          })}
        </tbody>
      
      </table>
    </div>
  );
}
