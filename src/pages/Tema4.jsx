import React from 'react';

function Tema4() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">GeoGebra</h1>

      <div className="card mb-4">
        <div className="card-body d-flex justify-content-center">
          
          <iframe
            src="https://www.geogebra.org/classic/n4m3yrbn?embed"
            width="800"
            height="600"
            allowFullScreen
            style={{ border: '1px solid #e4e4e4', borderRadius: '4px' }}
            frameBorder="0"
            title="GeoGebra Estadísticas"
          />

        </div>
      </div>
    </div>
  );
}

export default Tema4;