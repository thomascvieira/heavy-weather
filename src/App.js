import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  
  const addZipCode = async (zipCode) => {
    const res = await fetch('https://api.zippopotam.us/us/'+zipCode)
    const data = await res.json()

    setLocationData([data])
    setToggleInput(true)
    zipToCoords(locationData)
  }

  const zipToCoords = (data) => {
    setLat()
  }

  return (
    <div className="background">
      <div className="container">
        <Header 
          toggleInput={toggleInput}
        />
        <ZipCodeInput onAdd={addZipCode} />
      </div>
    </div>
  );
}

export default App;
