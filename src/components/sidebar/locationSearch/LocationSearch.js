import {useAppContext} from '../../context'
import './LocationSearch.css'

import SearchBar from './SearchBar.js'
import ResultButton from './ResultButton.js'

const LocationSearch = () => {

    const {setSidebar, availableLocations, setAvailableLocations, setMyLocation, setWeatherData} = useAppContext()

    const closeSidebar = () => {
        setSidebar(false)
        setAvailableLocations([])
    }

    const setLocationAndGetWeather = async (location) => {
        setMyLocation(location)
        localStorage['weather-app-location'] = JSON.stringify(location)
        try {            
            let req = await fetch(`https://www.metaweather.com/api/location/${location.woeid}`,{
                mode: 'no-cors'
              })
            let res = await req.json();            
            setWeatherData(res.consolidated_weather)
            closeSidebar()
            setAvailableLocations([])
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='location_search'>
            <div className='location_search__header'>
                <span onClick={closeSidebar} className="material-icons">
                    close
                </span>
            </div>

            <SearchBar />


            <div className='location_search__results'>
                {
                    availableLocations.map(location => 
                        <ResultButton 
                            onClick={() => setLocationAndGetWeather(location)}
                            title={location.title} 
                            woeid={location.woeid} 
                            key={location.woeid}
                        />
                    )
                }                
            </div>
        </div>
    )
}

export default LocationSearch
