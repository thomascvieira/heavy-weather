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
                        temp={projection.temp}
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
                        time={Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric'}).format(projection.dt * 1000)} 
                        temp={projection.temp.day} />)
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
