import { useState } from 'react'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";
import CurrentWeather from './components/CurrentWeather';

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)
  const [weatherData, setWeatherData] = useState([0])

  const addZipCode = async (zipCode) => {
    const res = await fetch('https://api.zippopotam.us/us/' + zipCode)
    const data = await res.json()

    setToggleInput(true)

    const lat = (data["places"]["0"]["latitude"])
    const lon = (data["places"]["0"]["longitude"])
    const loc = (data["places"]["0"]["place name"])

    setLocationData([loc, lat, lon])

    fetchWeatherData(lat, lon)
  }

  const fetchWeatherData = async (lat, lon) => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minutely&appid=d17b50c7549fbabee12361a8f6fd09d9')
    const data = await res.json()

    setWeatherData(data)
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
        {toggleInput&&
          <CurrentWeather 
            weatherData={weatherData}
          />
        }
      </div>
    </div>
  );
}

export default App;
