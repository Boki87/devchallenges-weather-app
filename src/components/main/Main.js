import './Main.css'

import WeatherDays from './weatherDays/WeatherDays.js'
import TodaysHighlights from './todaysHighlights/TodaysHighlights.js'

import {useAppContext} from '../context'

const Main = () => {

    const {weatherData, unit, setUnit} = useAppContext()

    const setUnitHandler = (type) => {
        setUnit(type)
        localStorage['weather-app-default-unit'] = type
    }

    return (
        <div className='main'>
            <div className='main__wrapper'>
                <div className='main__units'>
                    
                    <button onClick={() => setUnitHandler('C')} className={`main__units-btn ${unit == 'C' ? 'main__units-btn-active' : ''}`}>°C</button>

                    <button onClick={() => setUnitHandler('F')} className={`main__units-btn ${unit == 'F' ? 'main__units-btn-active' : ''}`}>°F</button>
                </div>

                {weatherData.length > 0 && 
                    <>
                        <WeatherDays />
                        <TodaysHighlights />
                    </>
                }
                
            </div>
            <div className='main__footer'>
                Bojan Peric @DevChallenges.io
            </div>
        </div>
    )
}

export default Main
