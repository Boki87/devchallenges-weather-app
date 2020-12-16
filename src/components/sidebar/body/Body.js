import './Body.css'

import WeatherIcon from '../../shared/WeatherIcon.js'

import {useAppContext} from '../../context'
import {formatDate} from '../../shared/utils.js'

const Body = () => {

    const {unit, weatherData, myLocation} = useAppContext()

    const now = +new Date()

    let today = formatDate(now)

    return (
        <div className='sidebar__body'>
            <div className='sidebar__body__weather_preview'>
                
                <WeatherIcon code={weatherData[0] ? weatherData[0].weather_state_abbr : 'cl'}/>
                
            </div>

            <div className='sidebar__body__temperature'>
                <span className='sidebar__body__temperature__degree'>{weatherData[0] ? Math.round(weatherData[0].the_temp) : 0}</span>
                <span className='sidebar__body__temperature__unit'>°{unit}</span>
            </div>

            <div className='sidebar__body__weather_description'>
                <span>{weatherData[0] ? weatherData[0].weather_state_name : 'Clear'}</span>
            </div>

            <div className='sidebar__body__date'>
                <span>Today</span>
                <span>·</span>
                <span>{today}</span>
            </div>

            <div className='sidebar__body__location'>
                <span className="material-icons">
                    location_on
                </span>
                <span>{myLocation.title}</span>
            </div>
        </div>
    )
}

export default Body
