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
    setFechaIng(props.item.fechaIng)
    setDescripcionIng(props.item.descripcionIng)
    setMontoIng(props.item.montoIng)
    setFechaEg(props.item.fechaEg)
    setDescripcionEg(props.item.descripcionEg)
    setMontoEg(props.item.montoEg)
    setNaranjaX(props.item.naranjaX)
    setMercadoPago(props.item.mercadoPago)
    setShow(true)
  };

  const modificarMovimiento = async() => {
    await axios.put(props.baseUrl+"/movimientos/"+props.item.id,{
      fechaIng: fechaIng,
      descripcionIng: descripcionIng,
      montoIng: parseInt(montoIng),
      fechaEg: fechaEg,
      descripcionEg: descripcionEg,
      montoEg: parseInt(montoEg),
      naranjaX: parseInt(naranjaX),
      mercadoPago: parseInt(mercadoPago)
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
                type="date"
                class="form-control"
                id="iptFechaIng"
                placeholder="Fecha Ingreso"
                defaultValue={props.item.fechaIng}
                onChange={(e) => setFechaIng(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                id="iptDescripcionIng"
                placeholder="Descripción"
                defaultValue={descripcionIng}
                onChange={(e) => setDescripcionIng(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMontoIng"
                placeholder="Precio"
                defaultValue={props.item.montoIng}
                onChange={(e) => setMontoIng(e.target.value)}
              />
              <input
                type="date"
                class="form-control"
                id="iptFechaEg"
                placeholder="Fecha Egreso"
                defaultValue={props.item.fechaEg}
                onChange={(e) => setFechaEg(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                id="iptDescripcionEg"
                placeholder="Descripción"
                defaultValue={props.item.descripcionEg}
                onChange={(e) => setDescripcionEg(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMontoEg"
                placeholder="Precio"
                defaultValue={props.item.montoEg}
                onChange={(e) => setMontoEg(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptNaranjaX"
                placeholder="Naranja X"
                defaultValue={props.item.naranjaX}
                onChange={(e) => setNaranjaX(e.target.value)}
              />
            <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                id="iptMercadoPago"
                placeholder="Mercado Pago"
                defaultValue={props.item.mercadoPago}
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
