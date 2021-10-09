import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)

  const addZipCode = async (zipCode) => {
    const res = await fetch('https://api.zippopotam.us/us/' + zipCode)
    const data = await res.json()

    setToggleInput(true)

    const lat = (data["places"]["0"]["latitude"])
    const lon = (data["places"]["0"]["longitude"])
    const loc = (data["places"]["0"]["place name"])
    
    setLocationData([loc, lat, lon])
  }

  return (
    <div className="background">
      <div className="container">
        <Header
          toggleInput={toggleInput}
          locationData={locationData}
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
