import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className='about-content'>
            <h2>Resources</h2>
            <ul>
                <li>Location data: <a href="https://zippopotam.us/" target="_blank" rel="noreferrer">Zippopotam.us</a></li>
                <li>Weather data: <a href="https://openweathermap.org/api/one-call-api" target="_blank" rel="noreferrer">OpenWeatherMap's One Call API</a></li>
                <li>Icons: <a href="https://erikflowers.github.io/weather-icons/" target="_blank" rel="noreferrer">Weather Icons</a> by Erik Flowers</li>
                <li>Gradient: <a href="https://cssgradient.io/" target="_blank" rel="noreferrer">cssgradient.io</a></li>
                <li>Design inspiration: <a href="https://open.spotify.com/album/2M9F2yYsUvqiBPwUGeNvn1" target="_blank" rel="noreferrer">Weather Report's <em>Heavy Weather</em></a></li>
            </ul>
            <h2>My Work</h2>
            <ul>
                <li>Portfolio: <a href="https://thomascvieira.com/" target="_blank" rel="noreferrer">thomascvieira.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/thomascvieira/" target="_blank" rel="noreferrer">thomascvieira</a></li>
            </ul>    
            <Link to='/heavy-weather'>Go Back</Link>
        </div>
    )
}

export default About
