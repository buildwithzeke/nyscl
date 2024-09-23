import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// views
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Forget from "./views/forget/Forget";
import Profile from "./views/profile/Profile";

function App() {

  const [islogin, setIsLogin] = useState(false);


  const susMsg = (msg) => toast.success(msg);
  const errMsg = (msg) => toast.error(msg);
  // const warnMsg = (msg) => toast.warning(msg);



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ islogin ? <Home susMsg={susMsg} errMsg={errMsg} /> : <Navigate to="/login" /> } />
          <Route path="/login" element={ !islogin ? <Login setIsLogin={setIsLogin} susMsg={susMsg} errMsg={errMsg}/> : <Navigate to="/" /> } />
          <Route path="/forget" element={ !islogin ? <Forget susMsg={susMsg} errMsg={errMsg} /> : <Navigate to="/" /> } />
          <Route path="/register" element={ !islogin ? <Register susMsg={susMsg} errMsg={errMsg} /> : <Navigate to="/" /> }/>
          { islogin && <Route path="/profile" element={ <Profile />} /> }
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
