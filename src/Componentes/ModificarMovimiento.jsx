import React, {useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

export default function ModificarMovimiento(props) {
  const [show, setShow] = useState(false);
  const [fechaIng, setFechaIng] = useState();
  const [descripcionIng, setDescripcionIng] = useState();
  const [montoIng, setMontoIng] = useState();
  const [fechaEg, setFechaEg] = useState();
  const [descripcionEg, setDescripcionEg] = useState();
  const [montoEg, setMontoEg] = useState();
  const [naranjaX, setNaranjaX] = useState();
  const [mercadoPago, setMercadoPago] = useState();

  const modalClose = () => {
    setShow(false)
    setFechaIng()
    setDescripcionIng()
    setMontoIng()
    setFechaEg()
    setDescripcionEg()
    setMontoEg()
    setNaranjaX()
    setMercadoPago()
  };
  const modalShow = () => {
    setFechaIng(props.item.fecha_ingreso)
    setDescripcionIng(props.item.descrip_ingreso)
    setMontoIng(props.item.monto_ingreso)
    setFechaEg(props.item.fecha_egreso)
    setDescripcionEg(props.item.descrip_egreso)
    setMontoEg(props.item.monto_egreso)
    setNaranjaX(props.item.monto_naranjax)
    setMercadoPago(props.item.monto_mercadopago)
    setShow(true)
  };

  const modificarMovimiento = async() => {
    await axios.put(props.baseUrl+"/movimientos/"+props.item.id,{
      fecha_ingreso: fechaIng,
      descrip_ing: descripcionIng,
      monto_ingreso: parseInt(montoIng),
      fecha_egreso: fechaEg,
      descrip_egreso: descripcionEg,
      monto_egreso: parseInt(montoEg),
      monto_naranjax: parseInt(naranjaX),
      monto_mercadopago: parseInt(mercadoPago)
    })
    .then(() => {
      alert("Movimiento modificado")
      modalClose()
    })
    .catch(err => (console.log(err)))
  }


  return (
    <>
        <button type="button" class="btn btn-warning btn-sm" onClick={modalShow}>
        <i class="bi bi-pencil"></i>
        </button>
      <Modal show={show} onHide={modalClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Movimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                id="iptFechaIng"
                placeholder="Fecha Ingreso"
                defaultValue={props.item.fecha_ingreso}
                onChange={(e) => setFechaIng(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                id="iptDescripcionIng"
                placeholder="Descripción"
                defaultValue={props.item.descrip_ingreso}
                onChange={(e) => setDescripcionIng(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMontoIng"
                placeholder="Precio"
                defaultValue={props.item.monto_ingreso}
                onChange={(e) => setMontoIng(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                id="iptFechaEg"
                placeholder="Fecha Egreso"
                defaultValue={props.item.fecha_egreso}
                onChange={(e) => setFechaEg(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                id="iptDescripcionEg"
                placeholder="Descripción"
                defaultValue={props.item.descrip_egreso}
                onChange={(e) => setDescripcionEg(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMontoEg"
                placeholder="Precio"
                defaultValue={props.item.monto_egreso}
                onChange={(e) => setMontoEg(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptNaranjaX"
                placeholder="Naranja X"
                defaultValue={props.item.monto_naranjax}
                onChange={(e) => setNaranjaX(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMercadoPago"
                placeholder="Mercado Pago"
                defaultValue={props.item.monto_mercadopago}
                onChange={(e) => setMercadoPago(e.target.value)}
              />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-danger" onClick={modalClose}>
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={modificarMovimiento}
          >
            Modificar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
