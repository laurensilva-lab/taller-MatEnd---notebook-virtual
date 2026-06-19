import React from 'react';
import imgEcuaciones from '../assets/EcuacionesEjercicio.png';
import dfImg from "../assets/DF.png";
import ruffiniImg from "../assets/ruffini.png";
import "../App.css";

function Tema3() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ecuaciones</h1>

      <div className="card mb-4">
        <div className="card-body">
          
          <div className="row align-items-center mb-4">
            <div className="col-12 col-md-6 text-center">
              <img 
                src={imgEcuaciones} 
                alt="Ecuaciones" 
                className="imagen-card-personalizada img-fluid mb-3" 
              />
            </div>

            <div className="col-12 col-md-6">
              <div className="card post-it-rosa">
                <div className="card-body">
                  <h5 className="card-title text-dark text-center">Multiplicación de los Signos</h5>
                  
                  <table className="table table-bordered tabla-estilo text-dark text-center">
                    <thead>
                      <tr>
                        <th>Operación</th>
                        <th>Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>(+) × (+)</td><td>(+) Positivo</td></tr>
                      <tr><td>(-) × (-)</td><td>(+) Positivo</td></tr>
                      <tr><td>(-) × (+)</td><td>(-) Negativo</td></tr>
                      <tr><td>(+) × (-)</td><td>(-) Negativo</td></tr>
                    </tbody>
                  </table>
                  <p className="small text-muted mt-2 text-center">
                    Signos iguales dan positivo, signos diferentes dan negativo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="card-title">Ecuación de Tercer Grado</h5>
            <p>
              Una ecuación de tercer grado o cúbica es un polinomio de la forma ax³ + bx² + cx + d = 0, donde a ≠ 0, y se resuelve encontrando sus raíces mediante factorización y la regla de Ruffini.
            </p>
          </div>


          <div className="row g-4 mb-4 align-items-stretch">
            <div className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center">
                <img 
            src={dfImg} 
            alt="DF.png" 
            className="imagen-card-personalizada img-fluid" 
          />
            </div>
            

            <div className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center">
              <img 
            src={ruffiniImg} 
            alt="Explicación de la Regla de Ruffini" 
            className="imagen-card-personalizada img-fluid" 
          />
            </div>
          </div>

          <hr className="my-4 text-muted" /> 

          
          <div className="mt-4">
            <h5 className="card-title mb-3">Video explicativo</h5>
            <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '800px' }}>
              <iframe
                src="https://www.youtube.com/embed/DR1K2899lOk?si=Y458wdPYThryzOZ0"
                title="Ecuaciones de tercer grado Ruffini"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div> 
    </div>
  );
}

export default Tema3;
