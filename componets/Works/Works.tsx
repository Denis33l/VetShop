import Image from "next/image";
import Bird from '../../assets/Works/bird.png';
import Rabbit from '../../assets/Works/rabbit.png';
import Dog from '../../assets/Works/dog.png';

function Works() {
    return (
        <div className="works__container">
            <div className="container">
                <h2 className="works__title">How it works</h2>

                <div className="works__contnent">
                    <div className="works__block">
                        <Image src={Bird} alt='bird' className="works__image-bird" />
                        <div className="works__subtitle">We receive your prescription</div>
                        <div className="works__description">Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!</div>
                    </div>

                    <div className="works__block">
                        <Image src={Rabbit} alt='rabbit' className="works__image-rabbit" />
                        <div className="works__subtitle">We deliver your care package</div>
                        <div className="works__description">Fast and free next-day delivery, straight to your door. Same-day in NYC and LA.</div>
                    </div>

                    <div className="works__block">
                        <Image src={Dog} alt='dog' className="works__image-dog" />
                        <div className="works__subtitle">You treat your pet</div>
                        <div className="works__description">Give your pet the care they need to feel better. Plus they can play with our included toy!</div>
                    </div>
                </div>
                <div className="works__button">
                    <button className="works__button-text">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Works;