import {useEffect, useState} from 'react'
import {useAppContext} from '../../context'
import './TodaysHighlights.css'

const TodaysHighlights = () => {

    const {weatherData} = useAppContext()

    const [data, setData] = useState({
        air_pressure: 0,
        humidity: 0,
        visibility: 0,
        wind_speed: 0,
        wind_direction_compass: 'NW'
    })

    useEffect(() => {
        if(weatherData[0]) {
            setData(weatherData[0])
        }
    }, [weatherData])


    return (
        <div className='todays_highlights'>
            <h1>Today's Highlights</h1>           

            <div className='todays_highlights__content'>
                <div className='todays_highlights__content__item'>
                    <div className="top">Wind Status</div>
                    <div className="middle">
                        <span className='main-text'>{Math.round(data.wind_speed)}</span>
                        <span className='secondary-text'>mph</span>
                    </div>
                    <div className="bottom">
                        <div>
                            <span className="material-icons">
                                navigation
                            </span>
                        </div>
                        <span>{data.wind_direction_compass}</span>
                    </div>
                </div> 

                <div className='todays_highlights__content__item'>
                    <div className="top">Humidity</div>
                        <div className="middle">
                            <span className='main-text'>{Math.round(data.humidity)}</span>
                            <span className='secondary-text'>%</span>
                        </div>
                        <div className="bottom">
                            <div style={{flexDirection:'column', width: '100%'}}>
                                <div className='todays_highlights__content__item__progress__scale'>
                                    <span>0%</span>
                                    <span>50%</span>
                                    <span>100%</span>
                                </div>
                                <progress className="todays_highlights__content__item__progress" value={Math.round(data.humidity)} max="100">                                
                                </progress>
                            </div>
                            
                        </div>
                </div>    

                <div className='todays_highlights__content__item'>
                    <div className="top">Visibility</div>
                    <div className="middle">
                        <span className='main-text'>{Math.round(data.visibility * 10) / 10}</span>
                        <span className='secondary-text'>miles</span>
                    </div>                    
                </div> 

                <div className='todays_highlights__content__item'>
                    <div className="top">Air Pressure</div>
                    <div className="middle">
                        <span className='main-text'>{Math.round(data.air_pressure)}</span>
                        <span className='secondary-text'>mbh</span>
                    </div>                    
                </div> 
            </div> 
        </div>
    )
}

export default TodaysHighlights
