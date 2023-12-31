import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      {/* ======= Navbar ======== */}
      <Navbar />
      {/* ======= Home ======== */}
      <Home />
    </div>
  );
}

export default App;
