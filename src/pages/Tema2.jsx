import React from 'react';
import miImagen from '../assets/Estadistica.png';
import "../App.css";

function Tema2() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Estadísticas</h1>

      <div className="card">
        <div className="card-body">
          
          <h5 className="card-title">Concepto de estadística en matemáticas</h5>
          <p className="mb-4">
            La estadística en matemáticas es una rama que se dedica al estudio de la recopilación, análisis, interpretación y presentación de datos.
            A través de métodos y técnicas estadísticas, se busca resumir información compleja en forma de números, gráficos y conclusiones significativas. 
            La estadística se aplica en diversas áreas, desde la investigación científica hasta el análisis de mercados y la toma de decisiones gubernamentales.
          </p>
          
          <hr className="divisor-cuaderno" />
          
          <div className="row g-4 align-items-center"> 
            
            <div className="col-12 col-md-6">
              <div className="contenedor-img-izq">
                <img 
                  src="https://i.pinimg.com/1200x/7a/d9/56/7ad956f42b3c0b526e30c676dfeb620a.jpg" 
                  alt="3M" 
                />
              </div>
            </div>
            
            <div className="col-12 col-md-6 text-center">
              <div className="contenedor-img-der">
                <img 
                  src={miImagen} 
                  alt="Gráficos de estadística" 
                />
              </div>
              
              <a 
                href="https://create.kahoot.it/share/fundamentos-de-estadistica-y-probabilidad/948f7bdb-298a-4560-b079-d084b5e50d18" 
                className="btn btn-kahoot-rosa btn-lg px-4 mt-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Kahoot de Estadística
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Tema2;