import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Demo from "./pages/Demo/Demo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
