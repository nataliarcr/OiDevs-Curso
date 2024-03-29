import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Login from './pages/Login';
import Home from "./pages/Home";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    );
  };
  
  export default App;
  