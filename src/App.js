import "./App.css";
import Dashboard from "./components/Dashboard.js";
import { Routes, Route } from "react-router-dom";
import Student from "./components/pages/student";
import Books from "./components/pages/books";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Routes>
          <Route path="/" element={<Student/>}/>
          <Route path="/books" element={<Books/>} />
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;
