import "../App.css"; 

function Home() {
  return (
    <div className="home-header">
      <div className="home-header">
        <h1>Notebook de Matemática</h1>
        <p className="lead">
         Estudiante Lauren Silva Docentes Made y Nacho
        </p>
      </div>

      <div className="card shadow">
        <div className="card-body text-center">
          <h4 className="card-title">indice</h4>
          </div>
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            <div className="list-group-item"><strong>Tema 1:</strong> Repaso</div>
            <div className="list-group-item"><strong>Tema 2:</strong> Estadística</div>
            <div className="list-group-item"><strong>Tema 3:</strong> Ecuaciones de tercer grado</div>
            <div className="list-group-item"><strong>Tema 4:</strong> Geogebra</div>
            <div className="list-group-item"><strong>Tema 5:</strong> Ecuaciones y Inecuaciones Racionales</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
