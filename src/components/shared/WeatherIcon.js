import ClearIcon from '../../assets/Clear.png'
import HailIcon from '../../assets/Hail.png'
import HeavyCloudIcon from '../../assets/HeavyCloud.png'
import HeavyRainIcon from '../../assets/HeavyRain.png'
import LightCloudIcon from '../../assets/LightCloud.png'
import LightRainIcon from '../../assets/LightRain.png'
import ShowerIcon from '../../assets/Shower.png'
import SleetIcon from '../../assets/Sleet.png'
import SnowIcon from '../../assets/Snow.png'
import ThunderstormIcon from '../../assets/Thunderstorm.png'

const WeatherIcon = ({code, className = 'weather_icon'}) => {

    var icons = {
        sn: SnowIcon,
        sl: SleetIcon,
        h: HailIcon,
        t: ThunderstormIcon,
        hr: HeavyRainIcon,
        lr: LightRainIcon,
        s: ShowerIcon,
        hc: HeavyCloudIcon,
        lc: LightCloudIcon,
        c: ClearIcon,
    }

    return (
        <img src={icons[code]} alt=""/>
    )
}

export default WeatherIcon
