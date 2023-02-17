import Image from "next/image";
import Icon1 from '../../assets/Footer/icon1.png';
import Icon2 from '../../assets/Footer/icon2.png';
import Icon3 from '../../assets/Footer/icon3.png';
import Icon4 from '../../assets/Footer/icon4.png';
import Icon5 from '../../assets/Footer/icon5.png';

function Social() {
    return (
        <div className="social__container">
            <Image src={Icon1} alt='icon' className="social__link"/>
            <Image src={Icon2} alt='icon' className="social__link"/>
            <Image src={Icon3} alt='icon' className="social__link"/>
            <Image src={Icon4} alt='icon' className="social__link"/>
            <Image src={Icon5} alt='icon' className="social__link"/>
        </div>
    )
}

export default Social;