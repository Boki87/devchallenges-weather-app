import {createContext, useContext, useState} from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const Context = ({children}) => {

    const [unit, setUnit] = useState('C')
    const [isSidebarOpen, setSidebar] = useState(false)
    const [myLocation, setMyLocation] = useState({
        "title": "New York",
        "location_type": "City",
        "woeid": 2459115,
        "latt_long": "40.71455,-74.007118"
      }) //default location
    const [availableLocations, setAvailableLocations] = useState([]) //search suggestions
    const [weatherData, setWeatherData] = useState([])
    const [isLoading, setLoading] = useState(false)

    return (
        <AppContext.Provider value={{
            unit,
            setUnit,
            isSidebarOpen,
            setSidebar,
            availableLocations,
            setAvailableLocations,
            isLoading,
            setLoading,
            myLocation,
            setMyLocation,
            weatherData,
            setWeatherData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context
