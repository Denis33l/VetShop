import Image from "next/image";
import DogGirl from '../../assets/Veterinarians/dog&girl.png';

function Veterinarins() {
    return (
        <div className="vet__container">
            <div className="container">
                <div className="vet__block">
                    <div className="vet__image">
                        <Image src={DogGirl} alt='Dog&Girl' />
                    </div>
                    <div className="vet__content">
                        <div className="vet__subtitle">For Veterinarians</div>
                        <div className="vet__title">Were are here to support you and your practice</div>
                        <div className="vet__description">Mixlab offers a simple, fast, reliable (and fun) home delivery pharmacy service for your clients. No more delays, no more miscommunications, no more grumpy pets. It’s time to partner with a pharmacy that cares about customer experience as much as you do.</div>
                        <div className="vet__button">
                            <button className="vet__button-text">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Veterinarins;