import "./App.css";
import LocalRoutes from "@application/routes/LocalRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <LocalRoutes />
    </Router>
  );
}

export default App;
