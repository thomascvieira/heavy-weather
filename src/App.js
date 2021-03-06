import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import ZipCodeInput from "./components/ZipCodeInput";
import CurrentWeather from './components/CurrentWeather';
import Button from './components/Button';
import Forecast from './components/Forecast';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const [locationData, setLocationData] = useState([])
  const [toggleInput, setToggleInput] = useState(false)
  const [weatherData, setWeatherData] = useState([0])
  const [forecastType, setForecastType] = useState('hourly')

  // used for underlining selected forecast
  let hourlyClassName = 'btn btn-forecast'
  let dailyClassName = 'btn btn-forecast'
  forecastType === 'hourly' ? hourlyClassName = 'btn btn-forecast btn-forecast-selected' : hourlyClassName = 'btn btn-forecast'
  forecastType === 'daily' ? dailyClassName = 'btn btn-forecast btn-forecast-selected' : dailyClassName = 'btn btn-forecast'

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
    <Router>
      <div className="background">
        <div className="container">
          <Header
            toggleInput={toggleInput}
            locationData={locationData}
          />
          <Route path='/heavy-weather' exact render={(props) => (
            <>
              {!toggleInput &&
                <ZipCodeInput
                  onAdd={addZipCode}
                  toggleInput={toggleInput}
                />
              }
              {toggleInput &&
                <>
                  <CurrentWeather weatherData={weatherData} />
                  <div>
                    <Button className={hourlyClassName} onClick={() => setForecastType('hourly')} text={'Hourly'} />
                    <Button className={dailyClassName} onClick={() => setForecastType('daily')} text={'Daily'} />
                  </div>
                  <Forecast weatherData={weatherData} forecastType={forecastType} />
                  <Button className={'btn btn-new-zip'} onClick={() => setToggleInput(false)} text={'Enter new ZIP'} />
                </>
              }
              <Footer />
            </>
          )}
          />
          <Route path='/heavy-weather/about' component={About} />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
