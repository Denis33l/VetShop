import Image from 'next/image';
import Logo1 from '../../assets/Footer/logo1.png';
import Logo2 from '../../assets/Footer/logo2.png';
import Logo3 from '../../assets/Footer/logo3.png';
import Logo4 from '../../assets/Footer/logo4.png';
import Logo5 from '../../assets/Footer/logo5.png';
import CallText from './CallText';
import CityGomel from './CityGomel';
import CityMinsk from './CityMinsk';
import QuickLinks from './QuickLinks';
import Social from './Social';


function Footer() {
    return (
        <div className="footer__inner">
            <div className="footer__container-bright">
                <div className="container">
                    <div className="footer__image-block">
                        <Image src={Logo1} alt='Logo' />
                        <Image src={Logo2} alt='Logo' />
                        <Image src={Logo3} alt='Logo' />
                        <Image src={Logo4} alt='Logo' />
                        <Image src={Logo5} alt='Logo' />
                    </div>
                </div>
            </div>
            <div className="footer__container-dark">
                <div className="container__wild">
                    <div className="footer__description">
                        <QuickLinks />
                        <CallText />
                        <CityMinsk />
                        <CityGomel />
                        <Social />
                    </div>
                    <p className="footer__year footer__text">©2021 Mixlab, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;