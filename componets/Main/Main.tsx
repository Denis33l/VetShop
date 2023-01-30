import Image from 'next/image';
import Rabbit from '../../assets/Petpharmacy/rabbit.png';
import LeftImage from '../../assets/Petpharmacy/left.png'
import RightImage from '../../assets/Petpharmacy/right.png';

function Main() {
    return (
        <div className="main__container">
            <div className="main__left-image">
                <Image src={LeftImage} alt='image' />
            </div>

            <div className="main__right-image">
                <Image src={RightImage} alt='image' />
            </div>

            <div className="container">
                <h2 className="main__title">The pet pharmacy humans are jealous of.</h2>
                <p className="main__subtitle">5 stars on <span>Yelp, Google</span> and <span>Facebook</span> because your best friend deserves only the best in pet care. </p>

                <div className="main__button">
                    <button className="main__button-text"> Try Mixlab</button>
                </div>

                <div className="main__rabbit">
                    <Image src={Rabbit} alt='Rabbit' />
                </div>

            </div>
        </div>
    )
}

export default Main;