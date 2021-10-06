import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";

const App = () => {

  const addZipCode = async (zipCode) => {
    const res = await fetch('https://api.zippopotam.us/us/'+zipCode)
    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <div className="background">
      <div className="container">
        <Header />
        <ZipCodeInput onAdd={addZipCode} />
      </div>
    </div>
  );
}

export default App;
