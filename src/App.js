import {useEffect} from 'react'
import Sidebar from './components/sidebar/Sidebar.js'
import Main from './components/main/Main.js'

import GlobalLoader from './components/GlobalLoader.js'

import {useAppContext} from './components/context'

import './App.css'

function App() {

  const {setMyLocation, setWeatherData, isLoading} = useAppContext()

  useEffect(() => {
    async function getData() {
      if(localStorage['weather-app-location']) {
        var cachedLocation = JSON.parse(localStorage['weather-app-location'])
        setMyLocation(cachedLocation)
      }
      try {                        
          let req = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/${cachedLocation.woeid}`)
          let res = await req.json();            
          setWeatherData(res.consolidated_weather)                
      }catch(err) {
          console.log(err);
      }
    }

    getData()
  }, [])

  return (
    <div className='app'>

      {isLoading && 
        <GlobalLoader style={{position:'fixed',top:'10px', right:'10px', color: '#fff'}}/>
      }

      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
