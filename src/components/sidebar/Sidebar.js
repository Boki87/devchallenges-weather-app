import Header from './header/Header.js'
import Body from './body/Body.js'
import LocationSearch from './locationSearch/LocationSearch.js'
import './Sidebar.css'

import {useAppContext} from '../context'


const Sidebar = () => {

    const {isSidebarOpen} = useAppContext()

    return (
        <div className='sidebar'>
            <Header />
            <Body />

            {isSidebarOpen && <LocationSearch />}
            
        </div>
    )
}

export default Sidebar
