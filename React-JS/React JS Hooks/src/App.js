import './App.css';
import React, { useState, useEffect } from 'react'

// parent components
import Introduction from './components/Introduction'
import Profile from './components/Profile'

const App = () => {
  // getter, setter // useState(DefaultValue)
  const [temanSaya, setTemanSaya] = useState(0 )
  const [namaTeman, setNamaTeman] = useState("")

  // , [] : for 1 time execution (without trigger)
  // , [value] : with trigger, will running while temanSaya has setter
  useEffect(() => {
    if(temanSaya > 0){
      setNamaTeman("Andi")
    }
  }, [temanSaya])

  return (
    <div class="container">
      <header>
        <Introduction />
        <Profile Nama="Yazid Dhiaulhaq Ismail" />
        <i>Saya memiliki {temanSaya} teman</i>
        <div>
          <button onClick={() => setTemanSaya((prev) => prev + 1)}>Tambah Teman</button>
          <button onClick={() => setTemanSaya((prev) => prev - 1)}>Kurang Teman</button>
        </div>
        <h5>Nama teman saya : {namaTeman}</h5>
      </header>
    </div>
  );
}

export default App;
