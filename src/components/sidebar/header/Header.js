import {useAppContext} from '../../context'
import './Header.css'

const Header = () => {

    const {setSidebar, setAvailableLocations, setLoading} = useAppContext()

    const openSidebar = () => {
        setSidebar(true)
    }


    async function getLocation() {
        setLoading(true)
        if (navigator.geolocation) {            
          navigator.geolocation.getCurrentPosition( async (position) => {            
            try {
                let {latitude, longitude} = position.coords
                let req = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`,{
                    mode: 'no-cors'
                  })
                let res = await req.json();
                setAvailableLocations(res)
                openSidebar()
                setLoading(false)
            }catch(err) {
                console.log(err);
                setLoading(false)
            }
            
          });
        } else { 
            setLoading(false)
          alert("Geolocation is not supported by this browser.")
        }
      }

    return (
        <div className='sidebar_header'>
            <button onClick={openSidebar} className='sidebar_header__search_btn'>Search for places</button>

            <button onClick={getLocation} className='sidebar_header__location_btn'>
                <span className="material-icons">
                    gps_fixed
                </span>
            </button>
        </div>
    )
}

export default Header
