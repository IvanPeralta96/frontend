import './App.css';
import Movimientos from './Componentes/Movimientos';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:3001";

function App() {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + "/movimientos").then((response) => {
      setMovimientos(response.data);
    });
  }, [movimientos]);


  return (
    <div class="container-xxl App">
      <Movimientos baseUrl={baseUrl} movimientos={movimientos} setMovimientos={setMovimientos} />
    </div>
  );
}

export default App;
