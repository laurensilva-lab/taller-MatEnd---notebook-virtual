import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tema1 from "./pages/Tema1";
import Tema2 from "./pages/Tema2";
import Tema3 from "./pages/Tema3";
import Tema4 from "./pages/Tema4";
import Tema5 from "./pages/Tema5";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema1" element={<Tema1 />} />
          <Route path="/tema2" element={<Tema2 />} />
          <Route path="/tema3" element={<Tema3 />} />
          <Route path="/tema4" element={<Tema4 />} />
          <Route path="/tema5" element={<Tema5 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
