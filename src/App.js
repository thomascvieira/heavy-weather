import { useState } from 'react'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";
import CurrentWeather from './components/CurrentWeather';
import ForecastToggle from './components/ForecastToggle';
import Button from './components/Button';

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)
  const [weatherData, setWeatherData] = useState([0])

  const addZipCode = async (zipCode) => {
    // error handling if 5 digit ZIP is invalid
    try {
      const res = await fetch('https://api.zippopotam.us/us/' + zipCode)
      const data = await res.json()

      setToggleInput(true)

      const lat = (data["places"]["0"]["latitude"])
      const lon = (data["places"]["0"]["longitude"])
      const loc = (data["places"]["0"]["place name"])

      setLocationData([loc, lat, lon])

      fetchWeatherData(lat, lon)
    } catch (e) {
      alert('Please enter a valid five digit ZIP code')
      setToggleInput(false)
      return
    }
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
        {toggleInput &&
          <>
            <CurrentWeather weatherData={weatherData} />
            <Button onClick={() => setToggleInput(false)} text={'Enter new ZIP'} />
          </>
        } 
      </div>
    </div>
  );
}

export default App;
