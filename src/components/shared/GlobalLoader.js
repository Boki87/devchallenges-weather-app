import './GlobalLoader.css'

const GlobalLoader = ({style = {}}) => {
    return (
        <span className="material-icons rotating" style={style}>
            cached
        </span>
    )
}

export default GlobalLoader
