// import {useState} from "react";
import './App.css';
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Home />
      <Register /> 
      <Login />
    </div>  
  );
}

export default App;
