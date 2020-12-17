import {useEffect, useState} from 'react'

import WeatherIcon from '../../shared/WeatherIcon.js'
import {formatDate} from '../../shared/utils.js'

import {useAppContext} from '../../context'

import {convertUnit} from '../../shared/utils.js'

import './WeatherCard.css'
const WeatherCard = ({max_temp, min_temp, weather_state, weather_state_short, date}) => {

    const {unit} = useAppContext()

    const [maxTemp, setMaxTemp] = useState(max_temp)
    const [minTemp, setMinTemp] = useState(min_temp)

    useEffect(() => {

        if(unit == 'F') {
            setMaxTemp(convertUnit(max_temp, unit))
            setMinTemp(convertUnit(min_temp, unit))
        }else{
            setMaxTemp(Math.round(max_temp))
            setMinTemp(Math.round(min_temp))
        }

    }, [unit])

    return (
        <div className='weather_card'>
            <div className='weather_card__date'>             
                {formatDate(date)}
            </div>
            <div className='weather_card__icon'>                
                <WeatherIcon code={weather_state_short} />
            </div>
            <div className='weather_card__temperature'>
                
                <span className='weather_card__temp_max'>{maxTemp} °{unit}</span>

                <span className='weather_card__temp_min'>{minTemp} °{unit}</span>
            </div>
        </div>
    )
}

export default WeatherCard
