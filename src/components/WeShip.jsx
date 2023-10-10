import React, { useState } from 'react';
import axios from 'axios';
const WeShip=()=> {
  const [data, setData] = useState({});

  
    const handleSubmit=()=>{
        axios.post('https://api.weship.com/shipments/find?limit=10&skip=0')
        .then(response=>{
            if(response.status==200){
                console.log(response.data)
                setData(response.data)
            }
        })
    }


  return (
    <div>
      <button onClick={handleSubmit}>Consultar API de WeShip</button>
      {data && (
        <div>
          <h2>Resultados de la API de WeShip:</h2>
          <p>Nombre del producto: {data.nombre}</p>
          <p>Descripción del producto: {data.descripcion}</p>
          <p>Precio del producto: {data.precio}</p>
        </div>
      )}
    </div>
  );
}

export default WeShip
