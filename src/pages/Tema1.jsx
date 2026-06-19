import React from 'react';
import "../App.css"; 

function Tema1() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ejercicio</h1>

      <div className="card">
        <div className="card-body">
          
          <p className="mb-4">
            Benito empieza a escribir de manera consecutiva y sin espacios, todos los números 
            naturales en español, de la siguiente manera:
            <strong> Unodostrescuatrocinco….</strong>
            Se detiene al escribir el número “noventaynueve”. 
            ¿Cuántas letras escribe en total?
          </p>

          <hr className="divisor-cuaderno" />

          <h5 className="card-title">Representación</h5>
          <ul className="mb-4">
            <li>lista de letras del 1 al 15=69 (números únicos)</li>
            <li>y lo mismo del 16 al 29 =137 aca contamos el dieci y el veinti y luego usamos la primera tabla</li>
            <li>del 30 al 99 hacemos lo mismo solo contamos una vez como noventa y luego usamos la primera lista que hicimos del 1 al 9</li>
            <li>si contamos todas las y  daria 63</li>
            <li>todos los números como 33 o 34 se contó con la primera tabla osea solo se contó el 4 y 3 esos restos dan 273</li>
            <li>dándonos un total 1,062</li>
          </ul>

          <hr className="divisor-cuaderno" />

          <div className="row align-items-center">
            
            <div className="col-md-7">
              <h5 className="card-title">Respuesta</h5>
              <p className="fs-5"><strong>Total de letras = 1,062</strong></p>
              <ul className="mb-0">
                <li>1-9 = 39 | 10-15 = 30 → Total = 69</li>
                <li>16-29 = 137</li>
                <li>30-99 = 520</li>
                <li>y = 63</li>
                <li>números entre medio = 273</li>
              </ul>
            </div>

            <div className="col-md-5 text-center mt-3 mt-md-0">
              <div className="contenedor-img-meme">
                <img 
                  src="https://i.pinimg.com/736x/b8/0e/53/b80e5374c5d755aa9a4835dfc871a015.jpg" 
                  alt="memebob" 
                  className="imagen-card-personalizada" 
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Tema1;

