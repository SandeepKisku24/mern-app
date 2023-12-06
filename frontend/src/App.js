import React, {useEffect, useState} from "react";
import Restrau from "./components/restrau"
import Navbar from "./components/navbar";
import Login from "./components/login";
import {BrowserRouter,Routes,Route}  from "react-router-dom"
// import { Restaurant } from "../../backend/models/restaurantModel";
function App() {


  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Login/>}/>
        <Route exact path = "/rest" element = {<Restrau/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
