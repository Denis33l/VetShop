import Image from "next/image";
import Dog from '../../assets/Pets/dog.png';
import Love from '../../assets/Pets/love.png';
import InstaIcon from '../../assets/Pets/insta.svg';
import LeftImage from '../../assets/Pets/left.png';
import RightImage from '../../assets/Pets/right.png';

function Pets() {
    return (
        <div className="pets__container">
            <Image src={LeftImage} alt='left' className="pets__image-left" />
            <Image src={RightImage} alt='right' className="pets__image-right" />
            <div className="container">
                <h2 className="pets__title">Pets love Mixlab!</h2>
                <p className="pets__subtitle">See why were are 5 stars on <span>Yelp, Google</span> and <span>Facebook</span>:)</p>
                <div className="pets__content">
                    <Image src={Dog} alt='dog' />
                    <div className="pets__description">
                        <Image src={Love} alt='love' className="pets__image-love" />
                        <p className="pets__description-text">“Tootsie just received her Mixlab order and she’s so excited for it! Within two hours of ordering it got delivered to the house and its like she knew it was at the door. She absolutely hates taking her medicine but she truly loves her Mixlab box because it’s so informative, quick, easy to order but especially because includes a new toy each time! Thank you Mixlab for always taking care of her! She can’t wait to place her next order now!”</p>
                        <div className="pets__desription-instagram">
                            <Image src={InstaIcon} alt='instagram' />
                            <p className="pets__description-instagram-text">Tootsie, CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pets;