import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Action from "./pages/Action";


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/action" element={<Action/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
