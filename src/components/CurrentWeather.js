const CurrentWeather = ({weatherData}) => {
    if(weatherData[0] !== 0)
    {
        let iconClass = weatherData.current.weather[0].id
        let description = weatherData.current.weather[0].description
        let temperature = parseInt(weatherData.current.temp)
        let feelsLike = parseInt(weatherData.current.feels_like)
        
        return (
            <div className='current-container'>
                <div className="current-row row">
                    <p className='current-temp'>{temperature}°F</p>
                    <i className={`wi wi-owm-${iconClass} current-icon`}></i>   
                </div>
                <div className="current-row row">
                    <p>Feels like {feelsLike}°F</p>
                    <p>{description}</p>
                </div>
            </div>
        )
    } else{
        return (
            <div className='current-container'>
                <h3>Loading...</h3>
            </div>
        )
    }

}

export default CurrentWeather
