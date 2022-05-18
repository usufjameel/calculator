import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./pages/home/home";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
