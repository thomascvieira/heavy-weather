const ForecastSection = ({weatherData, forecastType, forecastSection}) => {
    if(weatherData[0] !== 0){
        if(forecastType === 'hourly'){
            let forecastIconClass = weatherData.hourly.weather[0].id
            let forecastDescription = weatherData.hourly.weather[0].description
            let forecastTemp = parseInt(weatherData.hourly.temp)
            let forecastTime = weatherData.hourly.dt
            return (
                <div>
                    <p>{forecastIconClass}</p>
                    <p>{forecastDescription}</p>
                    <p>{forecastTemp}</p>
                    <p>{forecastTime}</p>
                </div>
            )
        }
    }
}

export default ForecastSection
