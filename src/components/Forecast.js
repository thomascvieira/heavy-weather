import ForecastSection from "./ForecastSection"
const Forecast = ({weatherData, forecastType, forecast}) => {
    return (
        <>
        {forecast.map((forecastSection) => (<ForecastSection key={forecastSection.dt} forecastSection={forecastSection}/>))}
        </>
    )
}

export default Forecast
