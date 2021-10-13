import Projection from "./Projection"
const Forecast = ({ weatherData, forecastType }) => {
    // checks for API response
    if (weatherData[0] !== 0) {

        if (forecastType === 'hourly') {
            let data = weatherData.hourly
            return (
                <>
                    {data.slice(0,9).map((projection) =>
                    (<Projection
                        key={projection.dt}
                        time={Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: 'true' }).format(projection.dt * 1000)}
                        temp={parseInt(projection.temp)+'°F'}
                        icon={projection.weather[0].id}
                        description={projection.weather[0].description}
                        rainChance={(projection.pop*100)+'%'}
                    />)
                    )}
                </>
            )
        }
        if (forecastType === 'daily') {
            let data = weatherData.daily
            return (
                <>
                    {data.map((projection) => 
                    (<Projection 
                        key={projection.dt} 
                        time={Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'numeric', day: 'numeric'}).format(projection.dt * 1000)} 
                        temp={parseInt(projection.temp.day)+'°F'}
                        icon={projection.weather[0].id}
                        description={projection.weather[0].description}
                        rainChance={(projection.pop*100)+'%'}
                    />)
                    )}
                </>
            )
        }
    }
    // while waiting for API response 
    else {
        return (
            <>
            </>
        )
    }

}

export default Forecast
