import React from 'react';
import logo from './logo.svg';
import './App.css';

// Penggunaan useState
import { useState } from "react";

// Penggunaan useRef
import { useRef } from 'react'; 

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

  // penggunaan useRef
  const linkRef = useRef(null)
  const goto = (ref) => {
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        // agar turun secara halus atau perlahan
        behavior: 'smooth'
    })
  }
  const linkRef2 = useRef(null)
  const goto2 = (ref) => {
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        // agar turun secara halus atau perlahan
        behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <header ref={linkRef2} className="App-header">
        <Navbar navSosmed={navSosmed} navHeader={navHeader} navValue={getNavVal}/>=
        <div onClick={() => goto(linkRef.current)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <p>Hello World!</p>
        <MyButton clicked={clicked}/>
        <Footer paragraph={paragraph} />

        <p>Penggunaan State Pada React</p>
        <UseState navValue={getNavVal} />
        <button onClick={() => changeNavVal()}>changeNavVal</button>

        <p>lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  </p>
        <p>Penggunaan useRef untuk link ke halaman yang sama</p>
        <button ref={linkRef} >useRef</button>
        <p>lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  </p>
        <p>Penggunaan useRef untuk link ke halaman yang sama</p>
        <button onClick={() => goto2(linkRef2.current)}>^</button>
      </header>
    </div>
  );
}

export default App;
