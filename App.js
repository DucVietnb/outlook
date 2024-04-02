import { Routes, Route, Link } from "react-router-dom";
import NavTop from "./Components/Navbar/NavTop";
import NavLeft from "./Components/Main/NavLeft";
import HomePage from "./Pages/HomePage/HomePage";
import Test from "./Pages/HomePage/Test";
function App() {
  return (
    <div className="App">
      <NavTop />
      <NavLeft />
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
