const CurrentWeather = ({weatherData}) => {
    if(weatherData[0] !== 0)
    {
        let iconClass = weatherData.current.weather[0].id
        return (
            <div className='currentWeather'>
                <h3>Current weather information</h3>
                <i className={`wi wi-owm-${iconClass} currentIcon`}></i>
            </div>
        )
    } else{
        return (
            <div className='currentWeather'>
                <h3>Loading...</h3>
            </div>
        )
    }

}

export default CurrentWeather
