import './WeatherCard.css'
import WeatherIcon from '../../shared/WeatherIcon.js'

import {formatDate} from '../../shared/utils.js'

const WeatherCard = ({max_temp, min_temp, weather_state, weather_state_short, date}) => {

    return (
        <div className='weather_card'>
            <div className='weather_card__date'>             
                {formatDate(date)}
            </div>
            <div className='weather_card__icon'>                
                <WeatherIcon code={weather_state_short} />
            </div>
            <div className='weather_card__temperature'>
                <span className='weather_card__temp_max'>{Math.round(max_temp)} °C</span>
                <span className='weather_card__temp_min'>{Math.round(min_temp)} °C</span>
            </div>
        </div>
    )
}

export default WeatherCard
