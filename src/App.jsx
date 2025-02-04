import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Policy from './components/Policy';
import Claim from './components/Claim';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
    </Router>
  );
}

export default App;
