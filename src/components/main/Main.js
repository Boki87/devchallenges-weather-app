import './Main.css'

import WeatherDays from './weatherDays/WeatherDays.js'
import TodaysHighlights from './todaysHighlights/TodaysHighlights.js'

import {useAppContext} from '../context'

const Main = () => {

    const {weatherData} = useAppContext()

    return (
        <div className='main'>
            <div className='main__wrapper'>
                <div className='main__units'>
                    <button className='main__units-btn main__units-btn-active'>°C</button>
                    <button className='main__units-btn'>°F</button>
                </div>

                {weatherData.length > 0 && 
                    <>
                        <WeatherDays />
                        <TodaysHighlights />
                    </>
                }
                
            </div>
        </div>
    )
}

export default Main
