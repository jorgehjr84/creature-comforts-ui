import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CostBreakdown } from "./pages/CostBreakdown";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-breakdown" element={<CostBreakdown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
