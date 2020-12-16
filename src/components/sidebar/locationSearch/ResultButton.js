import {useState} from 'react'

import './ResultButton.css'

const ResultButton = ({title, onClick}) => {

    const [loading, setLoading] = useState(false)

    const clickHandler = () => {
        setLoading(true)
        onClick()
    }

    return (
        <div onClick={clickHandler} className='location_search__result_button'>
            <span className="location_search__result_button__text">
                {title}
            </span>    

            {loading ? 
                <span className="material-icons rotating">
                    cached
                </span>
                :
                <span className="material-icons">
                    chevron_right
                </span>
            }
            
        </div>
    )
}

export default ResultButton
