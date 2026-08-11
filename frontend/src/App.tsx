import { Link, Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contatos";

function App() {
  return (
    <main className="min-h-screen bg-slate-300">
      <nav className="flex gap-6 bg-blue-900 p-4 text-white">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
