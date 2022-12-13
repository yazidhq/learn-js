import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [getValue, setValue] = useState("")
  const btnHome = () => {
    setValue("Halaman Utama")
  }
  const btnAbout = () => {
    setValue("Halaman About")
  }
  const btnContact = () => {
    setValue("Halaman Contact")
  }

  return (
    <div class="container">
      <header>
        <Navbar getHomeFunc={btnHome} getAboutFunc={btnAbout} getContactFunc={btnContact}/>
        <p>{!getValue ? "Halaman Utama" : getValue}</p>
      </header>
    </div>
  );
}

export default App;
