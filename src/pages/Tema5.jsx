import React from 'react';
import "../App.css"; 
import ecuacionesRelacionalesImg from "../assets/EcuacionRacional.png"; 

function Tema5() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Tema 5: Ecuaciones y Inecuaciones Racionales</h1>

      <div className="card">
        <div className="card-body">
          
          <h5 className="card-title">¿Qué es una ecuación racional?</h5>
          <p className="mb-4">
            Una ecuación racional es aquella en la que aparecen fracciones de polinomios, 
            es decir, ecuaciones donde la incógnita se encuentra en el denominador.
          </p>

          <div className="post-it-mini">
            <h6>Condición de Existencia:</h6>
            <p>
              El denominador debe ser siempre distinto de cero. Los valores que lo anulan deben excluirse de la solución.
            </p>
          </div>

          <hr className="divisor-cuaderno" />


          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/P1Fjg1pdRQ0?si=UeQ92SnY54aBsn4w"
                  title="Ecuaciones Racionales"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <hr className="divisor-cuaderno" />

          <div className="row align-items-stretch mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="contenedor-img-paralela">
                <img src={ecuacionesRelacionalesImg} alt="Ecuaciones Racionales" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="contenedor-img-pinterest">
                <img 
                  src="https://i.pinimg.com/1200x/e4/23/17/e42317f99139ce2ad7cfd9146b90f024.jpg" 
                  alt="inecuaciones racionales" 
                />
              </div>
            </div>
          </div>

          <hr className="divisor-cuaderno" />

          <div className="post-it-mini">
            <h6>Línea de Signos en Inecuaciones:</h6>
            <p>
              Se ubican en la recta numérica los ceros del numerador y denominador. Se estudian los signos de cada intervalo, recordando que los valores del denominador quedan abiertos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tema5;