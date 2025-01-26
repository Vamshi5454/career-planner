import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="text-white p-4 text-center">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
