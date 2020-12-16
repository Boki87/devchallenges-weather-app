import WeatherCard from './WeatherCard.js'
import {useAppContext} from '../../context'

import './WeatherDays.css'

const WeatherDays = () => {

    const {weatherData} = useAppContext()
    
    return (
        <div className='main__weather_days'>            

            {weatherData.map((day, index) => { //remove first day (today)

                if(index !== 0) {

                   return (<WeatherCard 
                        max_temp={day.max_temp}
                        min_temp={day.min_temp}
                        weather_state={day.weather_state_name}
                        weather_state_short={day.weather_state_abbr}
                        date={day.applicable_date}
                        key={day.created}
                    />)
                }

            })}
            
        </div>
    )
}

export default WeatherDays
