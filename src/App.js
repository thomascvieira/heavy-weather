import { useState, useEffect } from 'react'
import JsonQuery from 'json-query';
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)
  // const [lat, setLat] = useState('')

  const addZipCode = async (zipCode) => {
    const res = await fetch('https://api.zippopotam.us/us/' + zipCode)
    const data = await res.json()

    setLocationData([data])
    setToggleInput(true)

    const lat = JsonQuery('[*][latitude]', { data: Object.keys(locationData) }).value
    console.log(lat)
  }

  return (
    <div className="background">
      <div className="container">
        <Header
          toggleInput={toggleInput}
        />
        {!toggleInput &&
          <ZipCodeInput
            onAdd={addZipCode}
            toggleInput={toggleInput}
          />
        }
      </div>
    </div>
  );
}

export default App;
