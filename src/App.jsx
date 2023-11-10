import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { Create } from './Pages/Create/Create';
import { Login } from './Pages/Login/Login';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Landing } from './Pages/Landing/Landing';
import { Register } from './Pages/Register/Register';
import { AdminLogin } from './components/admin/adminLogin';




function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
  const signUserOut = () => {
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
      localStorage.clear();
      window.location.pathname = "/";
  };



  return (
    <>
      <Router>
      <nav>

        

        {!isAuth ? (
          <>
          <Link to={"/"}>Todo App</Link>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
          </>
        ) : (
          <>
            <Link to="/home"> Home </Link>
            <Link to="/create"> Create </Link>
            <button onClick={signUserOut}> Sign Out </button>
          </>
        )}

      </nav>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home isAuth={isAuth} />} />
        <Route path="/create" element={<Create isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-login' element={<AdminLogin setIsAuth={setIsAuth} />} />


      </Routes>

    </Router>


    </>
  )
}

export default App