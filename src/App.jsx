import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Resetpass from "./Auth/Resetpass";

const App = () => {
  return (
    <section className="bg-red-300">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Reset" element={<Resetpass />}></Route>
          </Route>
        </Routes>
      </Router>
    </section>
  );
};

export default App;
