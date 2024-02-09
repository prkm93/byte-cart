import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;