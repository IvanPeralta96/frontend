import "../Components.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import ModificarMovimiento from "./ModificarMovimiento";

export default function Movimientos(props) {
  const [show, setShow] = useState(false);
  const [fecha_ingreso, setFecha_Ingreso] = useState("");
  const [descrip_ingreso, setDescrip_Ingreso] = useState("");
  const [monto_ingreso, setMonto_Ingreso] = useState("");
  const [fecha_egreso, setFecha_Egreso] = useState("");
  const [descrip_egreso, setDescrip_Egreso] = useState("");
  const [monto_egreso, setMonto_Egreso] = useState("");
  const [monto_naranjax, setMonto_NaranjaX] = useState("");
  const [monto_mercadopago, setMonto_MercadoPago] = useState("");
  const [sumaIng, setSumaIng] = useState([])
  const [sumaEg, setSumaEg] = useState([])
  const [sumaNarX, setSumaNarX] = useState([])
  const [sumaMP, setSumaMP] = useState([])
  const [dateInicio, setDateInicio] = useState("")
  const [dateFin, setDateFin] = useState("")
  
  useEffect(() => {
    const handlesumar = () => {
      const sumarIng = props.movimientos.map((item) => item.monto_ingreso)
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setSumaIng(sumarIng);

      const sumarEg = props.movimientos.map((item) => item.monto_egreso)
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setSumaEg(sumarEg);

      const sumarNarX = props.movimientos.map((item) => item.monto_naranjax)
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setSumaNarX(sumarNarX);

      const sumarMP = props.movimientos.map((item) => item.mercadoPago)
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setSumaMP(sumarMP);
 
    };
    handlesumar(); 
  });


  const modalClose = () => {
    setShow(false)
    setFecha_Ingreso()
    setDescrip_Ingreso()
    setMonto_Ingreso()
    setFecha_Egreso()
    setDescrip_Egreso()
    setMonto_Egreso()
    setMonto_NaranjaX()
    setMonto_MercadoPago()
  };
  const modalShow = () => {
    setShow(true)
  };

   async function guardarMovimiento(){
    console.log(typeof(descrip_ingreso))
    if (fecha_ingreso === undefined) {setFecha_Ingreso(null)}
    if (descrip_ingreso === undefined) {setDescrip_Ingreso(null)}
    if (monto_ingreso === undefined) {setMonto_Ingreso(null)}
    if (fecha_egreso === undefined) {setFecha_Egreso(null)}
    if (descrip_egreso === undefined) {setDescrip_Egreso(null)}
    if (monto_egreso === undefined) {setMonto_Egreso(null)}
    if (monto_naranjax === undefined) {setMonto_NaranjaX(null)}
    if (monto_mercadopago === undefined) {setMonto_MercadoPago(null)}
    console.log((descrip_ingreso))
    console.log((monto_naranjax))

    await axios.post(props.baseUrl+"/movimientos",{
      fecha_ingreso: fecha_ingreso,
      descrip_ingreso: descrip_ingreso,
      monto_ingreso: parseInt(monto_ingreso),
      fecha_egreso: fecha_egreso,
      descrip_egreso: descrip_egreso,
      monto_egreso: parseInt(monto_egreso),
      monto_naranjax: parseInt(monto_naranjax),
      monto_mercadopago: parseInt(monto_mercadopago)
    })
    .then(() => {
      alert("Movimiento agregado")
      modalClose()
    })
    .catch(err => console.log(err))
  }

  async function eliminarMovimiento(id){
    if (window.confirm("¿Desea eliminar el registro?")){
      await axios.delete(props.baseUrl+"/movimientos/"+id)
      .then(() => alert("Movimiento eliminado"))
      .catch(err => console.log(err))
    }
  }


  return (
    <div class="movimientos container-xxl">
      <table class="table table-success table-striped table-sm table-bordered align-middle mb-2">
        <thead>
          <tr>
            <th colSpan="10" class="bg-primary"></th>
          </tr>
          <tr>
            <th colSpan="3" class="colVerde bg-success">Introduzca fecha inicial</th>
            <th colSpan="2" class="bg-light"><input type="date" value={dateInicio} onChange={e=>setDateInicio(e.target.value)} /></th>
            <th colSpan="3" class="colBlanca bg-light">Ingresos</th>
            <th colSpan="2" class="colBlanca bg-light"></th>
          </tr>
          <tr>
            <th colSpan="3" class="colVerde bg-success">Introduzca fecha final</th>
            <th colSpan="2" class="bg-light"><input type="date" value={dateFin} onChange={e=>setDateFin(e.target.value)} /></th>
            <th colSpan="3" class="colBlanca bg-light">Gastos</th>
            <th colSpan="2" class="colBlanca bg-light"></th>
          </tr>
          <tr><th colSpan="8" class="colBlanca bg-secondary">Diferencia</th><th colSpan="2" class="colVerde bg-success"></th></tr>
          <tr>
            <th colSpan="10" class="bg-primary"></th>
          </tr>
          <tr>
            <th colSpan="3" rowSpan="2" class="colVerde bg-success align-middle">Introduzca el mes</th>
            <th colSpan="2" rowSpan="2" class="bg-light align-middle"><input type="month" /></th>
            <th colSpan="3" class="colBlanca bg-light">Ingresos</th>
            <th colSpan="2" class="colBlanca bg-light"></th>
          </tr>
          <tr>
            <th colSpan="3" class="colBlanca bg-light">Gastos</th>
            <th colSpan="2" class="colBlanca bg-light"></th>
          </tr> 
          <tr><th colSpan="8" class="colBlanca bg-secondary">Diferencia</th><th colSpan="2" class="colVerde bg-success"></th></tr>

          <tr>
            <th colSpan="4" class="colRoja bg-danger">Total Ingresos</th>
            <th colSpan="3" class="colRoja bg-danger">Total Gastos</th>
            <th class="bg-danger">Total I-E</th>
            <th class="bg-danger">Naranja X</th>
            <th class="bg-danger">Mercado Pago</th>
          </tr>
          <tr>
            <th colSpan="4" class="colBlanca">{sumaIng}</th>
            <th colSpan="3" class="colBlanca">{sumaEg}</th>
            <th class="colBlanca">{sumaIng - sumaEg}</th>
            <th class="colBlanca">{sumaNarX}</th>
            <th class="colBlanca">{sumaMP}</th>
          </tr>
          <tr class="table-group-divider">
            <th scope="col"></th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {props.movimientos.map((item) => (
            <>
              <tr>
                <td>
                  <div>
                    <button type="button" class="btn btn-danger btn-sm me-1" onClick={() => eliminarMovimiento(item.id)}><i class="bi bi-trash"></i></button>
                    <ModificarMovimiento item={item} baseUrl={props.baseUrl} />
                  </div>
                </td>
                <th scope="row">{item.fecha_ingreso}</th>
                <td>{item.descrip_ingreso}</td>
                <td>{item.monto_ingreso}</td>
                <th>{item.fecha_egreso}</th>
                <td>{item.descrip_egreso}</td>
                <td>{item.monto_egreso}</td>
                <td>{item.monto_ingreso - item.monto_egreso}</td>
                <td>{item.monto_naranjax}</td>
                <td>{item.monto_mercadopago}</td>
              </tr>
            </>
          ))}

          </tbody>
      </table>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary mb-3" onClick={modalShow}>
            Nuevo Movimiento
        </button>
      </div>


          <Modal show={show} onHide={modalClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Movimiento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="input-group mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="iptFechaIng"
                    placeholder="Fecha Ingreso"
                    onChange={e => setFecha_Ingreso(e.target.value)}
                    />
                  <input
                    type="text"
                    class="form-control"
                    id="iptDescripcionIng"
                    placeholder="Descripción"
                    onChange={e => setDescrip_Ingreso(e.target.value)}
                  />
                  <span class="input-group-text">$</span>
                  <input
                    type="number"
                    class="form-control"
                    id="iptMontoIng"
                    placeholder="Precio"
                    onChange={e => setMonto_Ingreso(e.target.value)}
                  />
                  <input
                    type="date"
                    class="form-control"
                    id="iptFechaEg"
                    placeholder="Fecha Egreso"
                    onChange={e => setFecha_Egreso(e.target.value)}
                    />
                  <input
                    type="text"
                    class="form-control"
                    id="iptDescripcionEg"
                    placeholder="Descripción"
                    onChange={e => setDescrip_Egreso(e.target.value)}
                  />
                <span class="input-group-text">$</span>
                  <input
                    type="number"
                    class="form-control"
                    id="iptMontoEg"
                    placeholder="Precio"
                    onChange={e => setMonto_Egreso(e.target.value)}
                  />
                <span class="input-group-text">$</span>
                  <input
                    type="number"
                    class="form-control"
                    id="iptNaranjaX"
                    placeholder="Naranja X"
                    onChange={e => setMonto_NaranjaX(e.target.value)}
                  />
                <span class="input-group-text">$</span>
                  <input
                    type="number"
                    class="form-control"
                    id="iptMercadoPago"
                    placeholder="Mercado Pago"
                    onChange={e => setMonto_MercadoPago(e.target.value)}
                  />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" class="btn btn-danger" onClick={modalClose}>
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={guardarMovimiento}
              >
                Guardar
              </button>
            </Modal.Footer>
          </Modal>
    </div>
  );
}
