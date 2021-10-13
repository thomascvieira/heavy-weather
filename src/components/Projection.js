const Projection = ({time, temp, icon, description, rainChance}) => {
    return (
        <div className='projection row'>
            <div className='column date'>
                <p>{time}</p>
            </div>
            <div className='column projections'>
                <div className='row projection-data'>
                    <p className='forecast-temp'>{temp}</p>
                    <i className={`wi wi-owm-${icon} projection-icon`}></i>
                    <p className='forecast-desc'>{description}</p>
                    {rainChance !== '0%' && <p className='rain-chance'><i className='wi wi-raindrops rain-chance-icon'></i>{rainChance}</p> }
                </div>
            </div>

           {/* if chance of rain */}
 
        </div>

        
    )
}

export default Projection
