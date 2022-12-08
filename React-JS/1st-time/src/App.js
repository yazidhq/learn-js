import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
// mengambil data dari components
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UseState from './components/UseState';

const App = () => {
  // property yang dikirim ke navbar.js
  const navHeader = "Heading Bar"
  const navSosmed = "Sosmed"
  const paragraph = () => {
    return (
      <div>
        <p>Lorem Ipsum</p>
        <marquee>Lorem Ipsum</marquee>
      </div>
    )
  } 
  const clicked = () => {
    return alert("Tombol Ditekan")
  }

  // penggunaan state pada react
  // get : mengambil data yang sudah diinisiasi
  // set : menginisiasi atau memasukkan data
  const [getNavVal, setNavVal] = useState("")
  const changeNavVal = () => {
    setNavVal("MyContact")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navSosmed={navSosmed} navHeader={navHeader} navValue={getNavVal}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <MyButton clicked={clicked}/>
        <Footer paragraph={paragraph} />

        <p>Penggunaan State Pada React</p>
        <UseState navValue={getNavVal} />
        <button onClick={() => changeNavVal()}>changeNavVal</button>
      </header>
    </div>
  );
}

export default App;
