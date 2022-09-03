import "./App.css";
import Dashboard from "./components/Dashboard.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Student from "./components/pages/student";
import Books from "./components/pages/books";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student/>}/>
          <Route path="/books" element={<Books/>} />
          <Route path="/issuebooks" />
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;
